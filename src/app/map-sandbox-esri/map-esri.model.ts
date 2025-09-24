import { z } from "zod";

export interface MapEsriStateInterface {
  isLoading: boolean;
  arcGISApiKey: string;
  error: string | null;
}

export const SchemaArcGISApiKey = z.string();

// type UserInfered = z.infer<typeof SchemaUser>;
