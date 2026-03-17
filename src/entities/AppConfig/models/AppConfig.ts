/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace AppConfig {
  export interface ConfigDTO {
    id: number;
    created_at: Date;
    value: any;
    key: string;
  }

  export interface Model {
    availableFlows: string[];
  }
}
