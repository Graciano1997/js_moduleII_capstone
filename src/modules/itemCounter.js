const counterItem = () => {
  const element = document.querySelector('.moovie-list-container');
  if (element !== null) {
    return element.childElementCount;
  }
  return null;
};

export default counterItem;