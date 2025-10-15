// Utility function to smoothly scroll to a specific element by ID
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Since the header is not sticky anymore, we only need a small offset for visual spacing
    const offsetPadding = 20;
    
    // Calculate the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top;
    
    // Calculate the absolute position by adding the scroll position
    const offsetPosition = elementPosition + window.pageYOffset - offsetPadding;
    
    // Scroll to the element with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    return true;
  }
  
  return false;
};