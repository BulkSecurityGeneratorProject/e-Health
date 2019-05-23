# eHealth

[eHealth] socioPATH Application

<b>Install notes: </b>

- Install node js
- Install react && react-native
- Install yarn
- Install ignite-cli :
  - <i> yarn global add ignite-cli </i>
- Install Android Studio for Android SDK from <i>https://developer.android.com/studio</i>
- <b> Windows</b>: create <i>local.properties</i> file in socioPATH folder with your Android SDK location.
  <br/> Format: <i>sdk.dir</i> = <android_sdk_full_path>
- <b> Linux </b>: execute those 2 commands into a terminal or put them in <i><b>~/bashrc</b></i> file to persist them.
  - export ANDROID_HOME=$HOME/Android/Sdk
  - export PATH=$PATH:$ANDROID_HOME/tools

<b> Run project: </b>

- Start spring boot server:
  - <i> ./mvnw </i>
- Start mobile app from socioPATH folder:
  - <i> react-native run-android <i>
