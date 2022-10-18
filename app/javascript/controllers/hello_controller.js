import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect () {
    this.element.textContent = 'Hello World!'
  }
}
// controllers/gallery_controller.js
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  next (event) {
    // …
  }
}
