import { Component } from "@angular/core";
import { MessageService } from "../services/message.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-messages",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./messages.component.html",
  styleUrl: "./messages.component.css",
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
  throwError() {
    this.messageService.addToastMsg({
      severity: "success",
      summary: "Success Message",
      detail: "Message Content",
      key: "br",
      life: 3000,
    });
  }
}
