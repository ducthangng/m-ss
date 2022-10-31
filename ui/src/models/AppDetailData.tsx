import React from 'react';

interface AppDetailData {
  _id: string;
  creatorId: string;
  creatorName: string;
  title: string;
  description: string;
  rated: string;
  appType: string;
  appPaymentMethod: string;
  appCategories: string;
  appTags: string[];
  reviewer: string;
  downloaded: number;
  imageSrc: string;
  appIcon: string; // link to database.
  feedbacks: [
    {
      name: string;
      content: string;
    }
  ];
}

interface AppDetailDataLicense {
  _id: string;
  creatorId: string;
  creatorName: string;
  title: string;
  description: string;
  rated: string;
  appType: string;
  appPaymentMethod: string;
  appCategories: string;
  appTags: string[];
  reviewer: string;
  downloaded: number;
  imageSrc: string;
  license: string;
  appIcon: string;
  feedbacks: [
    {
      name: string;
      content: string;
    }
  ];
}

interface CreateAppData {
  creatorId: string;
  creatorName: string;
  title: string;
  description: string;
  rated: string;
  appType: string;
  appPaymentMethod: string;
  appCategories: string;
  appTags: string[];
  reviewer: string;
  downloaded: number;
  imageSrc: string;
  appIcon: string; // link to database.
  feedbacks: [
    {
      name: string;
      content: string;
    }
  ];
}

export type { AppDetailData, AppDetailDataLicense, CreateAppData };
