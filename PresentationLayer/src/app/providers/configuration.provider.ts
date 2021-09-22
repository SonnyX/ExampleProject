export class Configuration {
  logicLayerUrl: string;
}

export declare var config: Configuration;

export const configurationProvider = {
  provide: Configuration,
  useValue: config,
};
