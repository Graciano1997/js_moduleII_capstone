// count the number of items in a container

const counterItem = (containerIdentificator) => {
  const element = document.querySelector(containerIdentificator);
  if (element !== null) {
    return element.childElementCount;
  }
  return null;
};

export default counterItem;