export interface Period {
    number:           number;
    name:             string;
    startTime:        Date;
    endTime:          Date;
    isDaytime:        boolean;
    temperature:      number;
    temperatureTrend: null | string;
    windSpeed:        string;
    windDirection:    string;
    icon:             string;
    shortForecast:    string;
    detailedForecast: string;
}