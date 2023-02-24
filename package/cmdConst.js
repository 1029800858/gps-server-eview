module.exports = class Cmd_const {
  // Head
  // Command Head
  static CMD_Head = 0xab;
  // Command Head Encrypt
  static CMD_Head_Encrypt = 0xa5;

  // Command
  // Data Command
  static CMD_Type_Data = 0x01;
  // Configuration
  static CMD_Type_Config = 0x02;
  // Services
  static CMD_Type_Service = 0x03;
  // System Control
  static CMD_Type_System = 0x04;
  // Debug Control
  static CMD_Type_Debug = 0x06;
  // No Encryption command
  static CMD_Type_NoEncryption = 0x09;
  // Firmware Update
  static CMD_Type_Update = 0x7e;
  // Negative Response
  static CMD_Type_Response = 0x7f;

  // Data key(0x01)
  static CMD_Data_IMEI = 0x01;
  static CMD_Data_AlarmCode = 0x02;
  static CMD_Data_Historical = 0x11;
  static CMD_Data_SingleLocating = 0x12;
  static CMD_Data_ContinueLocating = 0x13;
  static CMD_Data_PetWalking = 0x14;
  static CMD_Data_GPS = 0x20;
  static CMD_Data_GSM = 0x21;
  static CMD_Data_GSM2 = 0x29;
  static CMD_Data_GSM3 = 0x2b;
  static CMD_Data_WIFI = 0x22;
  static CMD_Data_WIFI2 = 0x19;
  static CMD_Data_BLE = 0x23;
  static CMD_Data_BLE2 = 0x26;
  static CMD_Data_Status = 0x24;
  static CMD_Data_CallRecords = 0x25;
  static CMD_Data_Smart = 0x27;
  static CMD_Data_Beacon = 0x28;
  static CMD_Data_Beacon2 = 0x2c;
  static CMD_Data_HomeWifi = 0x2a;
  static CMD_Data_STEP = 0x30;
  static CMD_Data_Active = 0x31;
  static CMD_Data_BeaconList = 0x33;
  static CMD_Data_BeaconList2 = 0x34;
  static CMD_Data_HeartRate = 0x40;
  static CMD_Data_SPO2Rate = 0x41;
  static CMD_Data_LogRecord = 0xf0;

  // Config key(0x02)
  static CMD_Config_Module = 0x01; // Module Number
  static CMD_Config_Version = 0x02; // Firmware Version
  static CMD_Config_IMEI = 0x03; // IMEI
  static CMD_Config_ICCID = 0x04; // ICCID
  static CMD_Config_MAC = 0x05; // MAC
  static CMD_Config_DATATIME = 0x06; // Setting Time
  static CMD_Config_RUNTIME = 0x07; // Run Times
  static CMD_Config_Firmware = 0x08; // Firmware Information
  // System Setting
  static CMD_Config_Mileage = 0x09; // Initialize Mileage
  static CMD_Config_WorkMode = 0x0a; // Work Mode
  static CMD_Config_AlarmClock = 0x0b; // Alarm Clock
  static CMD_Config_NoDisturb = 0x0c; // No Disturb
  static CMD_Config_Password = 0x0d; // Password Protect
  static CMD_Config_TimeZone = 0x0e; // Time Zone
  static CMD_Config_EnableControl = 0x0f; // Enable control
  static CMD_Config_RingtoneVolume = 0x10; // Ring-Tone Volume
  static CMD_Config_MicVolume = 0x11; // Mic Volume
  static CMD_Config_SpeakerVolume = 0x12; // Speaker Volume
  static CMD_Config_DeviceName = 0x13; // Device Name
  static CMD_Config_Battery = 0x14; // Battery
  static CMD_Config_BleLoc = 0x15; // BLE loc
  static CMD_Config_BleWhiteList = 0x16; // BLE whitelist
  static CMD_Config_SMSGPSURL = 0x17; // SMS GPS URL
  static CMD_Config_SMSWIFIURL = 0x18; // SMS WIFI/LBS URL
  static CMD_Config_Music = 0x19; // Music
  static CMD_Config_FWVersion = 0x1a; // FW Version
  static CMD_Config_GSMModule = 0x1b; // GSM Module
  static CMD_Config_PromptVolume = 0x1c; // Voice prompt Volume
  static CMD_Config_AGPSLoc = 0x1d; // AGPS Location
  static CMD_Config_SystemLanguage = 0x1f; // System language(EV04 EV05 Only)
  // Button Setting
  static CMD_Config_SOSButton = 0x20; // SOS Button
  static CMD_Config_Call1Button = 0x21; // Call 1 Button
  static CMD_Config_Call2Button = 0x22; // Call 2 Button
  // Phone Settings
  static CMD_Config_Number = 0x30; // Set Authorized Number
  static CMD_Config_SMSOption = 0x31; // SMS Reply Prefix Text
  static CMD_Config_SOSOption = 0x32; // SOS Option
  static CMD_Config_PhoneOption = 0x33; // Phone Switches
  static CMD_Config_NumberNamePhoto = 0x34; // Set Authorized Number with Name and Photos（EV05）
  static CMD_Config_PersonalInfo = 0x35; // Set Personal Data Information（EV05）
  static CMD_Config_WatchSettings = 0x36; // Watch Settings (EV05 only)
  // GPRS Setting
  static CMD_Config_APN = 0x40; // APN
  static CMD_Config_ApnUserName = 0x41; // Apn user name
  static CMD_Config_ApnPassword = 0x42; // Apn password
  static CMD_Config_SeverIPPort = 0x43; // Sever IP &Port
  static CMD_Config_TimeInterval = 0x44; // Time interval
  static CMD_Config_ContinueLocate = 0x45; // Continue Locate
  static CMD_Config_HeartRateInterval = 0x46; // Heart Rate Interval
  static CMD_Config_WifiList = 0x4a; // WIFI List
  static CMD_Config_CatM = 0x4b; // Cat-M Setting
  static CMD_Config_APNList = 0x4c; // APN List(EV04 EV05 Only)
  static CMD_Config_APNNow = 0x4d; // APN Now(EV04 EV05 Only)
  static CMD_Config_GSMBand = 0x4e; // GSM band
  static CMD_Config_NetworkType = 0x4f; // Set Preferred network type(EV05/EV04 Only)
  // Alert Settings
  static CMD_Config_AlertPowerLow = 0x50; // Power Alert
  static CMD_Config_AlertGEO = 0x51; // GEO Alert
  static CMD_Config_AlertMotion = 0x52; // Motion Alert
  static CMD_Config_AlertNoMotion = 0x53; // No-motion Alert
  static CMD_Config_AlertOverSpeed = 0x54; // Over speed Alert
  static CMD_Config_AlertTilt = 0x55; // Tilt Alert
  static CMD_Config_AlertFallDown = 0x56; // Fall Down Alert
  static CMD_Config_AlertWelfare = 0x57; // Welfare Check (EC03 Only)
  static CMD_Config_AlertNotification = 0x58; // Alert Notification (EV04 only)
  static CMD_Config_MotionLevel = 0x59; // Motion level

  static CMD_Config_WifiWhiteList = 0x62; // WIFI White List
  static CMD_Config_NightMode = 0x63; // Night mode
  static CMD_Config_MobileNetwork = 0x64; // Mobile network information
  static CMD_Config_IMSI = 0x66; // IMSI
  static CMD_Config_HomeWifiMatch = 0x67; // Home WiFi match number
  static CMD_Config_BeaconList = 0x73; // Beacon location list
  static CMD_Config_ExtraControl = 0x75; // Extra Enable control

  static CMD_Config_Read = 0xf0; // Read
  // CMD_Config_Save = 0xFE// (0xFE)

  // Services key(0x03)
  static CMD_Services_IMEI = 0x01; // IMEI
  static CMD_Services_ICCID = 0x04; // ICCID
  static CMD_Services_HeartBeat = 0x10; // Heart beat
  static CMD_Services_getAddresses = 0x11; // Get Addresses
  static CMD_Services_getTimestamp = 0x12; // Get Timestamp
  static CMD_Services_getWeather = 0x13; // Get Weather
  static CMD_Services_getWeather2 = 0x14; // Get Weather
  static CMD_Services_getLocationGSM = 0x21; // Get GSM Location
  static CMD_Services_getLocationWIFI = 0x22; // Get WIFI Location
  static CMD_Services_generalData = 0x24; // General data

  // System key(0x04)
  static CMD_System_IMEI = 0x01; // IMEI
  static CMD_System_ReFactory = 0x11; // refactory
  static CMD_System_Reboot = 0x12; // reboot
  static CMD_Find_Me = 0x13// find_me
  static CMD_System_Shutdown = 0x14; // shutdown
  static CMD_System_ScanBLE = 0x16; // Scan BLE
  static CMD_System_ScanBeacon = 0x19; // Scan Beacon
  static CMD_System_ScanWifiAuto = 0x1a; // Scan WiFi List auto-setting
  static CMD_System_ScanWifi = 0x1b; // Scan WiFi List
  static CMD_System_upgradeURL = 0x30; // Device the request URL
  static CMD_System_Heart = 0x31; // Heart (EV05 Only)

  // No Encryption
  static CMD_NoEncryption_PasswordVerify = 0x0d; // Password Verify

  // Firmware Update key(0x7E)
  static CMD_Update_InitialData = 0x10; // Initial Data
  static CMD_Update_FirmwareData = 0x11; // Firmware Data
  static CMD_Update_Validate = 0x12; // Validate
  static CMD_Update_State = 0x13; // Update State
  static CMD_Update_PackSize = 0x15; // Update Pack Max len
  static CMD_Update_RequestData = 0x16; // Update Pack Max len

  // Response Data key(0x7F)
  static CMD_Response_Success = 0x00; // Success
  static CMD_Response_VersionError = 0x11; // Version Invalid
  static CMD_Response_EncryptError = 0x12; // Encryption Invalid
  static CMD_Response_LengthError = 0x13; // Length error
  static CMD_Response_CRCError = 0x14; // Check CRC error
  static CMD_Response_CommandError = 0x15; // Command Invalid
  static CMD_Response_KeyError = 0x16; // Key Invalid
  static CMD_Response_KeyLengthError = 0x17; // Key length error
  static CMD_Response_DataFormatError = 0x21; // Data Format Invalid
  static CMD_Response_DataSizeError = 0x22; // Data Size Error
  static CMD_Response_StateError = 0x23; // Invalid State
  static CMD_Response_ParameterError = 0x24; // Invalid Parameter
  static CMD_Response_NoMemoryError = 0x25; // No Memory
  static CMD_Response_funNoSuported = 0x26; // functiont not suported
  static CMD_Response_GPSNoLocation = 0x27; // GPS not Location
  static CMD_Response_AddressError = 0x28; // Address resolution Error
  static CMD_Response_ServiceFeeError = 0x30; // Service default fee
  static CMD_Response_ServiceNotExist = 0x31; // Service Not Exist
  static CMD_Response_NoPasswordVerify = 0x40; // No Password Verify
  static CMD_Response_LowBattery = 0xf0; // Battery Power Low
};
