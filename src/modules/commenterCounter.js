const commenterCounter = () => {
  const element = document.querySelector('#comments-item');
  if (element !== null) {
    return element.childElementCount;
  }
  return null;
};

export default commenterCounter;