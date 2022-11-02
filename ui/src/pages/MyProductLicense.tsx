import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Collapse } from 'antd';
import Popup from 'reactjs-popup';
import { App, License } from '../models/AppDetailData';
import { Divider, Tag } from 'antd';
import SideMenu from '../components/Header/SideMenu';
import '../assets/css/AppDetail.css';
import PurchasePopup from '../components/PurchasePopup';
import { appApi } from '../api/appApi';
import { userApi } from '../api/userApi';
import { licenseApi } from '../api/licenseApi';
import { User } from '../models/User';

const { Panel } = Collapse;

const defaultApp: App = {
  Key: '',
  Record: {
    assetType: '',
    assetId: '',
    creatorId: '',
    creatorName: '',
    title: '',
    description: '',
    rating: '',
    appType: '',
    paymentMethod: '',
    appTags: [],
    appCategories: [],
    appIconURL: '',
    averageProposedPrice: 0,
    proposalQuantity: 0
  }
};

const defaultUser: User = {
  _id: '',
  email: '',
  fullname: '',
  username: '',
  password: '',
  identity: ''
};

const defaultLicense: License[] = [
  {
    Key: '',
    Record: {
      appId: '',
      assetType: '',
      assetId: '',
      creatorId: '',
      licenseDetails: '',
      ownerId: ''
    }
  }
];

const MyProductLicense = () => {
  const navigate = useNavigate();
  const { appId } = useParams();
  const [data, setData] = useState({
    app: defaultApp,
    user: defaultUser,
    license: defaultLicense
  });

  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    if (appId?.length !== 0) {
      appApi.getAppById(appId as string).then((result) => {
        setData((state) => ({ ...state, app: result }));
      });

      licenseApi.getMyLicenseByAppId(appId as string).then((license) => {
        setData((state) => ({ ...state, license: license }));
      });
    }
  }, [appId]);

  useEffect(() => {
    if (data?.app?.Record?.creatorId?.length !== 0) {
      userApi
        .getInfoById(data?.app?.Record?.creatorId as string)
        .then((user) => {
          setData((state) => ({ ...state, user: user }));
        });
    }
  }, [data.app]);

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <body className="app-detail-body">
      <SideMenu />
      <PurchasePopup trigger={buttonPopup} setTrigger={setButtonPopup} />

      <div
        className="app-detail"
        style={{
          position: 'relative',
          width: '70vw',
          height: '80vh',
          top: '13vh',
          left: '15vw',
          backgroundColor: 'transparent'
        }}
      >
        <button
          className="return"
          onClick={() => navigate(-1)}
          style={{
            position: 'relative',
            top: '0',
            left: '0',
            border: 'none',
            background: 'none',
            fontSize: '1.5rem',
            fontWeight: '700'
          }}
        >
          Return
        </button>
        <div
          className="app-detail-container"
          style={{
            width: '100%',
            height: '90%',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            border: '1px solid #e8e8e8',
            boxShadow: '0 0 10px 0 #e8e8e8',
            position: 'absolute',
            bottom: '0',
            overflowY: 'scroll'
          }}
        >
          <div
            className="app-main-detail"
            style={{
              width: '90%',
              height: '50%',
              position: 'relative',
              top: '0',
              left: '0',
              marginLeft: '5%',
              marginTop: '2rem',
              backgroundColor: 'transparent'
            }}
          >
            <div
              className="app-detail-title"
              style={{
                position: 'relative',
                fontWeight: '700',
                top: '0',
                left: '0',
                backgroundColor: '#ffffff',
                fontSize: '3rem'
              }}
            >
              {data.app?.Record?.title.length === 0
                ? defaultApp.Record.title
                : data.app?.Record.title}
            </div>
            <div
              className="app-detail-author"
              // style={{
              //   position: 'relative',
              //   top: '0',
              //   left: '0',
              //   width: '50%',
              //   backgroundColor: '#ffffff',
              //   fontSize: '1.25rem',
              //   fontWeight: '400',
              //   color: '#FB7F4B',
              //   textOverflow: 'ellipsis',
              //   whiteSpace: 'nowrap',
              //   overflow: 'hidden',
              //   cursor: 'pointer',
              // }}
            >
              {data.app?.Record?.creatorName.length === 0
                ? defaultApp.Record.creatorId
                : data.app?.Record.creatorName}
            </div>
            <div
              className="app-detail-types"
              style={{
                position: 'relative',
                width: '60%',
                height: '30%',
                backgroundColor: '#ffffff',
                display: 'flex',
                // margin: 'auto',
                justifyContent: 'left',
                alignItems: 'center'
              }}
            >
              <Tag color="geekblue" style={{ fontSize: '16px' }}>
                {data.app?.Record.rating.length === 0
                  ? defaultApp.Record.rating
                  : data.app?.Record.rating}
              </Tag>

              <Tag color="magenta" style={{ fontSize: '16px' }}>
                {data.app?.Record.appCategories.length === 0
                  ? defaultApp.Record.appCategories
                  : data.app?.Record.appCategories}
              </Tag>
            </div>

            {/* <LicenseAppDetails /> */}
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
              <Panel header="License Key" key="1">
                {data?.license?.length !== 0 ? (
                  <div>
                    {data.license.map((license) => {
                      return <p>{license.Record.assetId}</p>;
                    })}
                  </div>
                ) : (
                  <p>N/A</p>
                )}
              </Panel>
            </Collapse>

            <img
              alt="AppImage"
              src={
                data.app?.Record.appIconURL.length === 0
                  ? defaultApp.Record.appIconURL
                  : data.app?.Record.appIconURL
              }
              style={{
                marginLeft: 'auto',
                marginRight: '5%',
                marginTop: '-27%',
                width: '30%',
                display: 'flex',
                position: 'relative'
              }}
            />
          </div>

          <div
            className="app-sub-detail"
            style={{
              width: '90%',
              height: '40%',
              position: 'relative',
              top: '3rem',
              left: '0',
              margin: '0 0 5% 5%',
              backgroundColor: 'transparent'
            }}
          >
            <div
              className="app-description-title"
              style={{
                position: 'relative',
                top: '0',
                left: '0',
                border: 'none',
                background: 'none',
                fontSize: '1.25rem',
                fontWeight: '700'
              }}
            >
              About this app
            </div>
            <div
              className="app-description"
              style={{
                position: 'relative',
                top: '0',
                left: '0',
                border: 'none',
                background: 'none',
                marginTop: '1rem',
                fontSize: '1rem',
                fontWeight: '400'
              }}
            >
              {data.app?.Record.description.length === 0
                ? defaultApp.Record.description
                : data.app?.Record.description}
            </div>
            <div
              className="app-feedback-title"
              style={{
                position: 'relative',
                top: '0',
                left: '0',
                border: 'none',
                background: 'none',
                fontSize: '1.25rem',
                fontWeight: '700',
                marginTop: '1.5rem'
              }}
            >
              Generated: November 2022
            </div>
            <div
              className="app-feedback-content"
              style={{
                position: 'relative',
                top: '0',
                left: '0',
                border: 'none',
                background: 'none',
                // marginTop: '1rem',
                fontSize: '1rem',
                fontWeight: '400'
              }}
            >
              <br />
              <i style={{ fontSize: '12px' }}>
                Warranty Note: MUESS (MUNCHEN SOFTWARE SERVICE) warrants that
                the Licensed Software will perform in accordance with its
                specifications for an ongoing from the date of acceptance. Joi
                Media will (at its own cost) rectify any faults in the Licensed
                Software notified to Joi Media during the duration of the
                platform. This constitutes Licensee's sole remedy for breaches
                of warranty under this Agreement.
              </i>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default MyProductLicense;
