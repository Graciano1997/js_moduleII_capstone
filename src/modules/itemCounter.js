const counterItem = (containerIdentificator) => {
  const element = document.querySelector(containerIdentificator);
  return element.childElementCount;
}

export default counterItem;