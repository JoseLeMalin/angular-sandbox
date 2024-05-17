import { Injectable } from "@angular/core";
import { UIMessage } from "../types/messages.types";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor() {}
  messages: (UIMessage | string)[] = [];

  add(message: string) {
    this.messages.push(message);
  }
  addToastMsg(message: UIMessage) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
