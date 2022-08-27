import { ApexChart, ApexLegend, ApexTheme } from 'ng-apexcharts';

export class StyleConstants {
  // video views style
  public static viewsVideoTheme: ApexTheme = {
    monochrome: {
      enabled: true,
      // color: '#E91E63',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  };

  public static viewsVideoLegend: ApexLegend = {
    customLegendItems: ['Simple views', 'Click', 'Completed videos'],
    position: 'bottom',
  };
  // public static viewsVideoLabels: any = ['Simple views', 'Click', 'Completed videos'];
  public static viewsVideoChart: ApexChart = {
    type: 'donut',
    height: 350,
    toolbar: {
      show: true,
    },
  };
  // Summary chart style
  public static summaryChart: ApexChart = {
    height: 350,
    type: 'area',
    zoom: {
      enabled: true,
    },
  };
  // Sexe chart style
  public static sexeChartsColors = ['#318ce7', '#E91E63'];

  // Shared style
  public static sharedSexeChart: ApexChart = {
    type: 'pie',
    height: 350,
    toolbar: {
      show: true,
    },
  };
  public static ageRange: any = [
    'Under 18',
    '18 until 25',
    '26 until 35',
    '36 until 45',
    'More than 46',
  ];

  public static sexeRange: any = ['Male', 'Female'];
  public static sharedSexeLegend: ApexLegend = {
    customLegendItems: StyleConstants.sexeRange,
    position: 'bottom',
    markers: {
      fillColors: StyleConstants.sexeChartsColors,
    },
  };
  public static sharedAgeRangeChart: ApexChart = {
    type: 'pie',
    height: 350,
    toolbar: {
      show: true,
    },
  };
  public static sharedAgeRangeTheme: ApexTheme = {
    monochrome: {
      enabled: true,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  };
  public static sharedSexeDemographicRepartitionChart: ApexChart = {
    type: 'bar',
    height: 350,
    zoom: {
      enabled: false,
    },
  };
}
