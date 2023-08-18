// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Application } from "@hotwired/stimulus"
window.Stimulus = Application.start()

import ModalController from "./controllers/modal_controller.js"
Stimulus.register("modal", ModalController)
