import { MapEsriStateInterface } from "../map-sandbox-esri/map-esri.model";
import { UserStateInterface } from "../users/users.model";

export interface AppStateInterface {
  users: UserStateInterface;
  mapSandboxEsri: MapEsriStateInterface;
}
