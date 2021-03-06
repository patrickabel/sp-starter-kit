import { MSGraphClient } from '@microsoft/sp-client-preview';
import { IContact } from "..";

export interface IPersonProps {
  className: string;
  person: IContact;
  graphClient: MSGraphClient;
}
