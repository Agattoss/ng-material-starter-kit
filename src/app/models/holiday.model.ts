export interface HolidayModel {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: [] | string;
  launchYear: any;
  type: string;
}
