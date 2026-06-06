

const APK_LINK ="https://firebasestorage.googleapis.com/v0/b/campuspawa.appspot.com/o/CampusPawa.apk?alt=media&token=84b13307-93f6-483d-89e1-eb5d8f490997";


// -------------------
// DOWNLOAD FUNCTION
// -------------------
function startDownload() {

    const status = document.getElementById("status");

    status.innerHTML = "⬇️ Download started...";
    //console.log('Download started')
    // trigger download
    const a = document.createElement("a");
    a.href = APK_LINK;
    a.download = "CampusPawa.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    //window.location.href = "files/CampusPawa.apk";

    setTimeout(() => {
        status.innerHTML = "✅ Download should be running";
    }, 1500);
}


// -------------------
// FEEDBACK FUNCTION
// -------------------
function sendFeedback() {

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    //console.log("=== FEEDBACK RECEIVED ===");
    //console.log("Name:", name);
    //console.log("Message:", message);
    //console.log("=========================");

    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

    alert("Thank you! Feedback sent successfully.");
}
