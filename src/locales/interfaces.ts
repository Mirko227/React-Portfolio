export interface Project {
  id: string;
  name: string;
  imgPath: string;
  description: string;
  languages: string[];
  link: string;
}

interface PrivacyPolicyTranslations {
  title: string;
  intro: string;
  dataControllerTitle: string;
  dataControllerInfo: string;
  dataCollectedTitle: string;
  dataCollectedInfo: string;
  dataInteraction: string;
  socialLinks: string;
  personalProjects: string;
  googleDrive: string;
  cookiePolicyTitle: string;
  cookiePolicyInfo: string;
  purposeOfProcessingTitle: string;
  purposeOfProcessingInfo: string;
  emailInteractionNote: string;
  rightsTitle: string;
  rightsInfo: string;
  changesPolicyTitle: string;
  changesPolicyInfo: string;
}

export interface AccItem {
  id: string;
  number: string;
  title: string;
  ulList: string[];
}

export interface Translation {
  navbar: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    closeBtn: string;
  };
  hero: {
    greeting: string;
    name: string;
    country: string;
  };
  about: {
    title: string;
    subtitle: string;
    info: string;
  };
  dev: {
    title: string;
    data: AccItem[];
  };
  projects: {
    title: string;
    data: Project[];
  };
  contact: {
    home: {
      title: string
    },
    contactPage: {
      title: string
    },
  },
  privacyPolicy: PrivacyPolicyTranslations;
}

