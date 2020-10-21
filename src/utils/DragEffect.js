// TODO DRAG EFFECT
export default class DragEffect {
  constructor(wrapper, card) {
    this.wrapper = typeof wrapper === "string" ? document.querySelector(wrapper) : wrapper;
    this.card = typeof card === "string" ? document.querySelector(card) : card;
  }
}
