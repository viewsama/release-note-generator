
function generateReleaseNote() {
  var releaseNote = '';

  // Get the values from the form inputs
  var typeOfRelease = getValue('textbox1');
  var iosSdkChangelog = getValue('textbox2');
  var androidSdkChangelog = getValue('textbox3');
  var tsSdkChangelog = getValue('textbox4');
  var jsSdkChangelog = getValue('textbox5');
  var flutterSdkChangelog = getValue('textbox6');
  var iosUikitChangelog = getValue('textbox7');
  var androidUikitChangelog = getValue('textbox8');
  var jsUikitChangelog = getValue('textbox11');
  var releaseNoteType = getValue('textbox9');
  var releaseName = getValue('textbox10');
  var iosSdkVersion = getValue('iosSdk');
  var androidSdkVersion = getValue('androidSdk');
  var tsSdkVersion = getValue('typescriptSdk');
  var jsSdkVersion = getValue('javascriptSdk');
  var flutterSdkVersion = getValue('flutterSdk');
  var iosUikitVersion = getValue('iosUIKit');
  var androidUikitVersion = getValue('androidUIKit');
  var jsUikitVersion = getValue('javascriptUIKit');

  // Get the current date and format it
  var formattedDate = formatDate(new Date());

  // Generate the release note based on the form inputs
  releaseNote += "# Release Notes: " + releaseNoteType + "\n\n" + "## " + releaseName + "\n\n";
  releaseNote += "Updated: " + formattedDate + "\n\n";
  releaseNote += "We are pleased to announce the latest releases of our " + typeOfRelease + ". These releases include several new features and fixes." + "\n\n";

  // Add main changlog for each platform
  releaseNote = addMainChangelog(releaseNote, iosSdkChangelog, "iOS SDK");
  releaseNote = addMainChangelog(releaseNote, androidSdkChangelog, "Android SDK");
  releaseNote = addMainChangelog(releaseNote, tsSdkChangelog, "Typescript SDK");
  releaseNote = addMainChangelog(releaseNote, jsSdkChangelog, "Javascript SDK");
  releaseNote = addMainChangelog(releaseNote, flutterSdkChangelog, "Flutter SDK");
  releaseNote = addMainChangelog(releaseNote, iosUikitChangelog, "iOS UIKit");
  releaseNote = addMainChangelog(releaseNote, androidUikitChangelog, "Android UIKit");
  releaseNote = addMainChangelog(releaseNote, jsUikitChangelog, "Javascript UIKit");

  // Add the "Version Released" section
  releaseNote += "**Version Released**\n\n";
  releaseNote = addPlatformVersion(releaseNote, iosSdkVersion, "iOS SDK");
  releaseNote = addPlatformVersion(releaseNote, androidSdkVersion, "Android SDK");
  releaseNote = addPlatformVersion(releaseNote, tsSdkVersion, "Typescript SDK");
  releaseNote = addPlatformVersion(releaseNote, jsSdkVersion, "Javascript SDK");
  releaseNote = addPlatformVersion(releaseNote, flutterSdkVersion, "Flutter SDK");
  releaseNote = addPlatformVersion(releaseNote, iosUikitVersion, "iOS UIKit");
  releaseNote = addPlatformVersion(releaseNote, androidUikitVersion, "Android UIKit");
  releaseNote = addPlatformVersion(releaseNote, jsUikitVersion, "Javascript UIKit");

  // Add the "Changelogs and Versioning" section
  releaseNote += "\n**Changelogs and Versioning**\n\n";

  // Add platform-specific changelogs and versioning (if any)
  releaseNote += addPlatformChangelog(iosSdkChangelog, iosSdkVersion, "iOS SDK");
  releaseNote += addPlatformChangelog(androidSdkChangelog, androidSdkVersion, "Android SDK");
  releaseNote += addPlatformChangelog(tsSdkChangelog, tsSdkVersion, "TypeScript SDK");
  releaseNote += addPlatformChangelog(jsSdkChangelog, jsSdkVersion, "Javascript SDK");
  releaseNote += addPlatformChangelog(flutterSdkChangelog, flutterSdkVersion, "Flutter SDK");
  releaseNote += addPlatformChangelog(iosUikitChangelog, iosUikitVersion, "iOS UIKit");
  releaseNote += addPlatformChangelog(androidUikitChangelog, androidUikitVersion, "Android UIKit");
  releaseNote += addPlatformChangelog(jsUikitChangelog, jsUikitVersion, "Javascript UIKit");

  return releaseNote;
}

function getValue(id) {
  return document.getElementById(id).value;
}

function formatDate(date) {
  var options = { day: 'numeric', month: 'long', year: 'numeric' };
  var formattedDate = date.toLocaleString('en-US', options).replace(',', '');

  // Split the formattedDate into parts (month, day, year)
  var dateParts = formattedDate.split(' ');

  // Rearrange the parts to get the desired format
  var day = dateParts[1];
  var month = dateParts[0];
  var year = dateParts[2];

  // Concatenate the parts with the desired format
  return day + ' ' + month + ' ' + year;
}

function addMainChangelog(releaseNote, notes, platform) {
  if (notes) {
    releaseNote += "**" + platform + "**:\n\n" + notes + "\n\n";
  }
  return releaseNote;
}

function addPlatformVersion(releaseNote, version, platform) {
  if (version) {
    releaseNote += "- **" + platform + "**: " + version + "\n";
  }
  return releaseNote;
}

function addPlatformChangelog(changelog, version, platform) {
  if (version) {
    var platformChangelog = platform + "\n\n" + "# Version " + version + "  (" + formatDate(new Date()) + ")\n";
    platformChangelog += changelog + "\n\n";
    if (platform.includes("iOS")) {
      platformChangelog += "## Compatibility\n";
      platformChangelog += "- Xcode Version: 14.3\n";
      platformChangelog += "- Realm Version: 10.39.1\n";
      platformChangelog += "- Realm Swift Version: 10.39.1\n";
      platformChangelog += "- Minimum Target: iOS 13.0\n\n";
    }
    if (platform.includes("Android")) {
      platformChangelog += "## Android SDK Version\n";
      platformChangelog += "- minSDKversion: 21\n";
      platformChangelog += "- targetSDKversion: 33\n\n";
      platformChangelog += "## Compatibility:\n";
      platformChangelog += "- OKHTTP3: 4.9.0\n";
      platformChangelog += "- Retrofit2: 2.9.0\n";
      platformChangelog += "- Android Paging Data Library: 3.0.1\n";
      platformChangelog += "- Room: 2.4.0-alpha04\n";
      platformChangelog += "- RxJava3: 2.3.10\n";
      platformChangelog += "- Gson: 2.8.10\n";
      platformChangelog += "- Kotlin-std-lib: 1.5.10\n";
      platformChangelog += "- HiveMQ mqtt client: 1.2.2\n";
      platformChangelog += "- Firebase messaging: 23.0.0\n";
      platformChangelog += "- Firebase Iid: 21.1.0\n";
      platformChangelog += "- Exo Player: 2.18.1\n\n";
    }
    platformChangelog += "\n";
  }
  return platformChangelog;
}

async function rephrase(releaseNote) {
  releaseNote = await sendOpenAiRequest(releaseNote);
  var loadingElement = document.getElementById('loading');
  // loadingElement.style.display = 'block';
}

async function sendOpenAiRequest(releaseNote) {
  const apiKey = '{{OPENAI_API_KEY}}';
  const prompts =
    'Please review the following paragraph and correct any grammar mistakes and rephrase the sentences'
    + 'to make the language more clear and understandable while keeping the format intact'
    + '+ also include the same version released and keep the tone professional'
    + 'In the paragraph below, please make the necessary grammar corrections and rephrase the sentences'
    + 'to improve clarity without altering the overall format:'

    + 'Your task is to refine the language and sentence structure of the paragraph provided.'
    + 'Make it grammatically accurate and easy to understand while preserving the existing format:\n\n'
    + releaseNote;
  const params = {
    model: 'gpt-3.5-turbo',
    messages: [
      { "role": "system", "content": "A Professional technical writer named View😂" },
      { "role": "user", "content": prompts }
    ]
  };

  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", params, {
      headers: {
        Authorization: "Bearer " + apiKey,
      },
    });

    const answer = response.data.choices[0].message.content;
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = answer.replace(/\n/g, '<br>');
  } catch (error) {
    console.log(error);
  }
}

document.getElementById('generateBtn').addEventListener('click', function (event) {
  event.preventDefault();
  var releaseNote = generateReleaseNote();
  rephrase(releaseNote);
});