



///////////////////////////
function switchLanguage() {
        var currentLang = document.documentElement.lang;
        if (currentLang == "en") {
          document.documentElement.lang = "ar";
          document.getElementById("langButton").innerHTML = "ع";
        } else {
          document.documentElement.lang = "en";
          document.getElementById("langButton").innerHTML = " En";
        }
      }



