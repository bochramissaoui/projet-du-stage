export class Constants {
  /* ENDPOINTS */
  public static FILE_STORAGE_ENDPOINT = 'https://media.relead.tn/';
  public static LOGIN_ENDPOINT = '/user/login';
  public static USER_ENDPOINT = '/user';
  public static ADMIN_ENDPOINT = '/admin';
  public static FILE_ENDPOINT = '/file';
  public static ADVERTISER_ENDPOINT = '/advertiser';
  public static STATICS_ENDPOINT = '/statics';
  public static ADVERTISING_CAMPAIGN_ENDPOINT = '/advertising-campaign';
  public static ROUTER_ENDPOINT = '/router';
  public static BUG_REPORT_ENDPOINT = '/bug-report';
  public static LOCATION_PARTNER_ENDPOINT = '/location-partner';

  /* VARIABLES */
  public static BUSINESS_SECTORS: string[] = [
    'Education',
    'Professional training and coaching',
    'Marketing and advertising',
    'Restaurant',
    'Associations and social organisations',
    'Finance',
    'Retail',
    'Real Estate',
    'Gambling and casinos',
    'Gaming',
    'Human Resources',
    'Assurance',
    'IT services',
    'Accounting',
    'Administrative',
    'Business Development',
    'Consulting',
    'Engineering',
    'Entrepreneurship',
    'Healthcare Services',
    'Legal',
    'Program and Project Management',
    'Support',
  ];

  public static REDIRECTION_TIMEOUT = 3000;
  public static PRICE_LOCATION = 0.1;
  public static PRICE_ADVERTISER = 0.4;
}
