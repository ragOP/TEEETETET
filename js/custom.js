
var startTime = 3.00; //set countdown in Minutes

var doneClass = "done"; //optional styling when timer is done
function startTimer(duration, display) {
  var timer = duration,
    minutes, seconds;
  var intervalLoop = setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    for (var i = 0; i < display.length; i++) {
      display[i].textContent = minutes + ":" + seconds;
    }
    if (--timer < 0) {
      for (var i = 0; i < display.length; i++) {
        display[i].classList.add(doneClass);
        display[i].textContent = "DONE";
      }
      clearInterval(intervalLoop);
    }
  }, 1000);
}

$(document).ready(function () {
  var tempCssClass;

  setTimeout(function () {
    $("#initTyping").remove();
    $("#msg1").removeClass("hidden").after(typingEffect());
    setTimeout(function () {
      $(".temp-typing").remove();
      $("#msg2").removeClass("hidden").after(typingEffect());
      scrollToBottom();
      setTimeout(function () {
        $(".temp-typing").remove();
        $("#msg3").removeClass("hidden").after(typingEffect());
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg4").removeClass("hidden");
        }, 0);
      }, 1750);
    }, 1250);
  }, 750);

  var buttonValue;
  var currentStep;

  $("button.chat-button").on("click", function () {
    currentStep = $(this).attr("data-form-step");
    buttonValue = $(this).attr("data-form-value");

    if (currentStep == 1) {
      // Assume your anchor tag's href is something like /path?param1=value1
      var anchorTag = document.getElementById("rtRef");
      var anchorUrl = new URL(anchorTag.href);
      var anchorParams = new URLSearchParams(anchorUrl.search);

      // Assume your window location is something like /path?param2=value2
      var windowUrl = new URL(window.location.href);
      var windowParams = new URLSearchParams(windowUrl.search);

      // Append params from the anchor tag to the main URL's params
      for (let pair of anchorParams.entries()) {
        windowParams.append(pair[0], pair[1]);
      }

      // Set the window's location search params
      windowUrl.search = windowParams.toString();
      history.replaceState({}, "", windowUrl.toString());

      //scrollToBottom();
      $("#agentBlock2 .agent-chat").prepend(typingEffect());
      $("#msg4").addClass("hidden");
      $("#userBlock1").removeClass("hidden");
      scrollToBottom();
      setTimeout(function () {
        $("#agentBlock2").removeClass("hidden");
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg6").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg7").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg8").removeClass("hidden");
              scrollToBottom();
            }, 0);
          }, 1750);
        }, 2250);
      }, 50);
    }

    if (currentStep == 2) {
      //scrollToBottom();
      $("#agentBlock3 .agent-chat").prepend(typingEffect());
      $("#msg8").addClass("hidden");
      $("#userBlock2").removeClass("hidden");
      //scrollToBottom();
      if (buttonValue == "No") {
        $("#msg9no").removeClass("hidden");
        //$("#hdnApprovalStatus").val("no");
      } else if(buttonValue == "Yes") {
        $("#msg9yes").removeClass("hidden");
      } else {
        $("#msg9maybe").removeClass("hidden");

      }
      scrollToBottom();
      setTimeout(function () {
        $("#agentBlock3").removeClass("hidden");
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg10").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg11").removeClass("hidden");
            scrollToBottom();
          }, 0);
        }, 1750);
      }, 50);
    }
    if (currentStep == 3) {
      //scrollToBottom();
      $("#agentBlock4 .agent-chat").prepend(typingEffect());
      $("#msg11").addClass("hidden");
      $("#userBlock3").removeClass("hidden");
      //scrollToBottom();
      if (buttonValue == "No") {
        $("#msg12no").removeClass("hidden");
      } else if (buttonValue == "Yes") {

        $("#msg12yes").removeClass("hidden");
      } else {
        $("#msg12maybe").removeClass("hidden");

      }
      /*if (buttonValue == "No") {
       // $("#msg12no").removeClass("hidden");
      } else if (buttonValue == "Medicaid") {
      //  $("#msg12medicaid").removeClass("hidden");
        // $("#hdnApprovalStatus").val("no");
        setTimeout(function () {
          $("#agentBlock4").removeClass("hidden");
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg18").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg19").removeClass("hidden");
              scrollToBottom();
              setTimeout(function () {
                $(".temp-typing").remove();
                $("#msg20").removeClass("hidden");
                console.log("here");
                scrollToBottom();
                setTimeout(function () {
                  $("#disconnected").removeClass("hidden");
                  scrollToBottom();
                }, 1250);
              }, 1250);
            }, 1250);
          }, 1250);
        }, 1250);
        return false;
      } else {
        $("#msg12medicare").removeClass("hidden");
        setTimeout(function () {
          $("#agentBlock4").removeClass("hidden");
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg18").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg19").removeClass("hidden");
              scrollToBottom();
              setTimeout(function () {
                $(".temp-typing").remove();
                $("#msg20").removeClass("hidden");
                scrollToBottom();
                setTimeout(function () {
                  $("#disconnected").removeClass("hidden");
                  scrollToBottom();
                }, 1250);
              }, 1250);
            }, 1250);
          }, 1250);
        }, 1250);
        return false;
      }*/
      scrollToBottom();
      //

      if ($("#hdnApprovalStatus").val() == "no") {
        //downsell
        $("#DownsellNumber").removeClass("hidden");

        setTimeout(function () {
          $("#msg17approved").removeClass("hidden");
          scrollToBottom();
          setTimeout(() => {
            var setMinutes = 60 * startTime,
            display = document.querySelectorAll("#timer");
          startTimer(setMinutes, display);
          }, 1000);
        }, 750);
        var script = document.createElement("script");
        script.src =
          "https://b-js.ringba.com/CA159e7e501e464f8e9b009e637625040e";
        document.head.appendChild(script);
        $("#msg14disapproved").removeClass("hidden");
        $("#msg16disapproved").removeClass("hidden");
      } else {
        //standard aca
        $("#PrimaryNumber").removeClass("hidden");

        setTimeout(function () {
          $("#msg17approved").removeClass("hidden");
          scrollToBottom();
          setTimeout(() => {
            var setMinutes = 60 * startTime,
            display = document.querySelectorAll("#timer");
          startTimer(setMinutes, display);
          }, 1000);
        }, 750);
        var script = document.createElement("script");
        script.src =
          "https://b-js.ringba.com/CA159e7e501e464f8e9b009e637625040e";
        document.head.appendChild(script);
        $("#msg14approved").removeClass("hidden");
        $("#msg16approved").removeClass("hidden");
      }
      scrollToBottom();
      //
      setTimeout(function () {
        $("#agentBlock4").removeClass("hidden");
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg13").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg14").removeClass("hidden").after(typingEffect());
            scrollToBottom();
          //  setTimeout(function () {
            //  $(".temp-typing").remove();
            //  $("#msg15").removeClass("hidden").after(typingEffect());
              scrollToBottom();
              setTimeout(function () {
                $(".temp-typing").remove();
                $("#msg16").removeClass("hidden").after(typingEffect());
                scrollToBottom();
                setTimeout(function () {
                  $(".temp-typing").remove();
                  $("#msg17").removeClass("hidden");
                  $("#msg17a").removeClass("hidden");
                  //$('#tcpa').removeClass('hidden');
                  scrollToBottom();
                }, 0);
              }, 2250);
         //   }, 1250);
          }, 1750);
        }, 1250);
      }, 250);
    }
  });

  function scrollToBottom(elementId) {
    var object = $("main");
    $("html, body").animate(
      {
        scrollTop:
          object.offset().top + object.outerHeight() - $(window).height(),
      },
      "fast"
    );
  }
});

function typingEffect(cssClass) {
  string =
    '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">';
  string += '<div class="typing-animation">';
  string += '<div class="typing-dot"></div>';
  string += '<div class="typing-dot"></div>';
  string += '<div class="typing-dot"></div>';
  string += "</div>";
  string += "</div>";

  return string;
}

var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var currentDate = new Date();
var currentDayOfWeek = daysOfWeek[currentDate.getDay()];
var currentMonth = months[currentDate.getMonth()];
var currentDay = currentDate.getDate();
var currentYear = currentDate.getFullYear();
var formattedDate =
  currentDayOfWeek +
  ", " +
  ("0" + (currentDate.getMonth() + 1)).slice(-2) +
  "/" +
  ("0" + currentDay).slice(-2) +
  "/" +
  currentYear;
document.getElementById("currentDate").textContent = formattedDate;

var triggerOfferwall = function () {
  setTimeout(function () {
    window.open(
      "https://dwizr.com/?a=7669&c=3792&p=r&s1",
      "_blank"
    );
  }, 10000);
};
