import axios from "axios";
import ExplorerProvider from "./explorer";
import * as fs from 'fs'
import * as path from 'path'
import { v4 as uuid } from "uuid";

interface User {
  id: string
  active: string
}

export default class MonitorProvider {
  private url = 'https://int.miaixyt.com'
  private userPath = ''
  private user: User = {
    id: '',
    active: ''
  }
  public explorer: ExplorerProvider

  constructor(explorer: ExplorerProvider) {
    this.explorer = explorer
    try {
      this.userPath = path.join(this.explorer.context.extensionPath, 'asset/user.json')
      const user =  fs.readFileSync(this.userPath, 'utf-8')
      let today = new Date().getDate()
      if (user) {
        this.user = JSON.parse(user)
      }
      let canSend = false
      if (!this.user.id) {
        this.user.id = uuid()
        this.user.active = today.toString()
        fs.writeFileSync(this.userPath, JSON.stringify(this.user), 'utf-8')
        canSend = true
      } else {
        if (parseInt(this.user.active) !== today) {
          canSend = true
          this.user.active = today.toString()
          fs.writeFileSync(this.userPath, JSON.stringify(this.user), 'utf-8')
        }
      }
      if (canSend) {
        this.active()
      }
    } catch (_error: any) {
    }
  }

  active() {
    axios.post(this.url + '/api/sm/addArticleReadLog', {
      device_id: this.user.id,
      platform: 'IDE'
    })
  }

}