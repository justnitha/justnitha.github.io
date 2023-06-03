
const tabs = document.querySelectorAll(".scrollable-tabs-container a");
        const rightArrow = document.querySelector(
          ".scrollable-tabs-container .right-arrow i"
        );
        const leftArrow = document.querySelector(
          ".scrollable-tabs-container .left-arrow i"
        );
        const tabsList = document.querySelector(".scrollable-tabs-container ul");
        const leftArrowContainer = document.querySelector(
          ".scrollable-tabs-container .left-arrow"
        );
        const rightArrowContainer = document.querySelector(
          ".scrollable-tabs-container .right-arrow"
        );
        
        const removeAllActiveClasses = () => {
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
        };
        
        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            removeAllActiveClasses();
            tab.classList.add("active");
          });
        });
        
        const manageIcons = () => {
          if (tabsList.scrollLeft >= 20) {
            leftArrowContainer.classList.add("active");
          } else {
            leftArrowContainer.classList.remove("active");
          }
        
          let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
          console.log("scroll width: ", tabsList.scrollWidth);
          console.log("client width: ", tabsList.clientWidth);
        
          if (tabsList.scrollLeft >= maxScrollValue) {
            rightArrowContainer.classList.remove("active");
          } else {
            rightArrowContainer.classList.add("active");
          }
        };
        
        rightArrow.addEventListener("click", () => {
          tabsList.scrollLeft += 200;
          manageIcons();
        });
        
        leftArrow.addEventListener("click", () => {
          tabsList.scrollLeft -= 200;
          manageIcons();
        });
        
        tabsList.addEventListener("scroll", manageIcons);
        
        let dragging = false;
        
        const drag = (e) => {
          if (!dragging) return;
          tabsList.classList.add("dragging");
          tabsList.scrollLeft -= e.movementX;
        };
        
        tabsList.addEventListener("mousedown", () => {
          dragging = true;
        });
        
        tabsList.addEventListener("mousemove", drag);
        
        document.addEventListener("mouseup", () => {
          dragging = false;
          tabsList.classList.remove("dragging");
        });

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


