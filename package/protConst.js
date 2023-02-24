module.exports = class Prot_const {
  // Command Data(HeadBody)
  // Command Head Data
  static CMD_Head = "cmdHeadData";
  // Command Body Data
  static CMD_Body = "cmdBodyData";
  // Command Original Data
  static CMD_Original = "originalData";
  // Command Head sequenceId
  static CMD_Head_SequenceId = "sequenceId";
  // Command Head length
  static CMD_Head_Length = "length";
  // Command Head checkCRC
  static CMD_Head_CheckCRC = "checkCRC";
  // Command Head version
  static CMD_Head_Version = "version";
  // Command Head flagACK
  static CMD_Head_FlagACK = "flagACK";
  // Command Body cmdType
  static CMD_Body_CmdType = "cmdType";
  // Command Body cmdKey
  static CMD_Body_CmdKey = "cmdKey";
  static CMD_Body_Index = "index";
  static CMD_Value_NULL = "null";
  static CMD_Value_FLAG = "flagValue";
  static CMD_Key_Unsupported = "UnsupportedKeys";

  // Command Head encodeType
  static CMD_Head_EncodeType = "encodeType";
  // Command Head encodeType
  static CMD_Head_EncodeId = "encodeId";

  // Command Body Type
  // Data Command
  static Type_0x01 = "locationData";
  // Configuration
  static Type_0x02 = "configData";
  // Services
  static Type_0x03 = "servicesData";
  // System Control
  static Type_0x04 = "systemData";
  // Debug Control
  static Type_0x06 = "debugData";
  // Firmware Update
  static Type_0x7E = "updateData";
  // Negative Response
  static Type_0x7F = "responseData";
  // Data
  static Data_list = "dataList";

  static Log_list = "logList";

  // Data Key(0x01)
  // IMEI
  static Data_0x01 = "imei";
  static Data_0x04 = "iccId";
  // Alarm
  static Data_0x02 = "alarm";
  // SingleLocating
  static Data_0x12 = "singleLocating";
  // ContinueLocating
  static Data_0x13 = "continueLocating";
  // Pet walking
  static Data_0x14 = "petWalking";
  // GPS
  static Data_0x20 = "gps";
  // GSM
  static Data_0x21 = "gsm";
  static Data_0x29 = "gsm2";
  static Data_0x2B = "gsm3";
  // WIFI
  static Data_0x22 = "wifi";
  static Data_0x19 = "wifi2";
  // BLE
  static Data_0x23 = "ble";
  static Data_0x26 = "ble2";
  // Status
  static Data_0x24 = "status";
  // Smart Location
  static Data_0x27 = "smart";
  // Beacon
  static Data_0x28 = "beacon";
  static Data_0x2C = "beacon2";
  // HomeWifi
  static Data_0x2A = "homeWifi";
  // CallList
  static Data_0x25 = "callList";
  // StepList
  static Data_0x30 = "stepList";
  // ActiveList
  static Data_0x31 = "activeList";
  // BeaconList
  static Data_0x33 = "beaconList";
  static Data_0x34 = "beaconList2";
  // HeartList
  static Data_0x40 = "heartList";
  // SPO2List
  static Data_0x41 = "spo2List";

  // Data Alarm(0x02)
  // dateTime
  static Data_0x02_DateTime = "dateTime";
  // alarmFlag
  //	 Data_0x02_AlarmFlag = "alarmFlag"
  // alarmStatus
  static Data_0x02_AlarmStatus = "alarmStatus";
  static Data_0x02_AlarmStatusExtend = "alarmStatusExtend";
  // batteryLow
  static Data_0x02_BatteryLow = "batteryLow";
  // overSpeed
  static Data_0x02_OverSpeed = "overSpeed";
  // fallDown
  static Data_0x02_FallDown = "fallDown";
  // tilt
  static Data_0x02_Tilt = "tilt";
  // geo1
  static Data_0x02_Geo1 = "geo1";
  // geo2
  static Data_0x02_Geo2 = "geo2";
  // geo3
  static Data_0x02_Geo3 = "geo3";
  // geo4
  static Data_0x02_Geo4 = "geo4";
  // powerOff
  static Data_0x02_PowerOff = "powerOff";
  // powerOn
  static Data_0x02_PowerOn = "powerOn";
  // motion
  static Data_0x02_Motion = "motion";
  // noMotion
  static Data_0x02_NoMotion = "noMotion";
  // sosKey
  static Data_0x02_SosKey = "sosKey";
  // side1key
  static Data_0x02_Side1key = "side1key";
  // side2key
  static Data_0x02_Side2key = "side2key";
  // batteryCharging
  static Data_0x02_BatteryCharging = "batteryCharging";
  // batteryNoCharging
  static Data_0x02_BatteryNoCharging = "batteryNoCharging";
  // alarmEnd
  static Data_0x02_AlarmEnd = "alarmEnd";
  static Data_0x02_Amber = "amber";
  static Data_0x02_Welfare = "welfare";
  static Data_0x02_AmberEnd = "amberEnd";
  static Data_0x02_FallDownEnd = "fallDownEnd";
  static Data_0x02_WelfareEnd = "welfareEnd";
  static Data_0x02_Upload = "upload";
  // homeFenceOut
  static Data_0x02_HomeFenceOut = "homeFenceOut";
  // homeFenceIn
  static Data_0x02_HomeFenceIn = "homeFenceIn";
  static Data_0x02_Geo1_In = "geo1_in";
  static Data_0x02_Geo2_In = "geo2_in";
  static Data_0x02_Geo3_In = "geo3_in";
  static Data_0x02_Geo4_In = "geo4_in";
  static Data_0x02_BleDisConnected = "bleDisConnected";
  static Data_0x02_FallOff = "fallOff";

  // Data Status(0x24)
  static Data_0x24_DateTime = "dateTime"; // DateTime
  static Data_0x24_DeviceStatus = "deviceStatus"; // DeviceStatus
  static Data_0x24_StatusCode = "statusCode"; // StatusCode
  static Data_0x24_DataType = "dataType"; // DataType
  static Data_DataType_BLE = "BLE"; // DataType BLE
  static Data_DataType_Smart = "Smart"; // DataType Smart
  static Data_DataType_Beacon = "Beacon"; // DataType Beacon
  static Data_DataType_HomeWifi = "HomeWifi"; // DataType HomeWifi
  static Data_DataType_GPS = "GPS"; // DataType GPS
  static Data_DataType_WIFIGSM = "WIFI&GSM"; // DataType WIFI&GSM
  static Data_DataType_WIFI = "WIFI"; // DataType WIFI
  static Data_DataType_GSM = "GSM"; // DataType GSM
  static Data_0x24_IsGPS = "isGPS"; // IsGPS
  static Data_0x24_IsWIFI = "isWIFI"; // IsWIFI
  static Data_0x24_IsGMS = "isGMS"; // IsGMS
  static Data_0x24_IsBLE = "isBLE"; // IsBLE
  static Data_0x24_IsSmart = "isSmart"; // IsSmart
  static Data_0x24_IsBeacon = "isBeacon"; // IsBeacon
  static Data_0x24_BleConnected = "bleConnected"; // BLE Connected
  static Data_0x24_FallDownStatus = "fallDownStatus"; // Fall down allow on status
  static Data_0x24_IsHomeWifi = "isHomeWifi"; // IsHomeWifi
  static Data_0x24_IsCharging = "isCharging"; // IsCharging
  static Data_0x24_IsChargingComplete = "isChargingComplete"; // ChargingComplete
  static Data_0x24_IsReboot = "isReboot"; // Reboot
  static Data_0x24_IsHistoricalData = "isHistoricalData"; // HistoricalData
  static Data_0x24_IsAGPS = "isAGPS"; // AGPS
  static Data_0x24_IsMotion = "isMotion"; // Motion
  static Data_0x24_WorkMode = "workMode"; // WorkMode
  static Data_0x24_SignalSize = "signalSize"; // SignalSize
  static Data_0x24_Battery = "battery"; // Battery
  static Data_0x24_IsHome = "isHome"; // IsHome

  // Data GPS(0x20)
  static Data_0x20_Lat = "lat"; // lat
  static Data_0x20_Lng = "lng"; // lng
  static Data_0x20_Speed = "speed"; // speed
  static Data_0x20_Direction = "direction"; // direction
  static Data_0x20_Altitude = "altitude"; // altitude
  static Data_0x20_Precision = "precision"; // precision
  static Data_0x20_Mileage = "mileage"; // mileage
  static Data_0x20_Satellites = "satellites"; // satellites

  // Data GSM(0x210x290x2B)
  static Data_0x21_GsmList = "gsmList";
  static Data_0x21_GsmType = "gsmType";
  static Data_0x21_Mcc = "mcc";
  static Data_0x21_Mnc = "mnc";
  static Data_0x21_CellId = "cellId";
  static Data_0x21_Lac = "lac";
  static Data_0x21_Signal = "signal";

  // Data Ble(0x230x26)
  static Data_0x23_Mac = "mac";
  static Data_0x23_Lat = "lat";
  static Data_0x23_Lng = "lng";
  static Data_0x23_Radius = "radius";
  static Data_0x23_Height = "height";
  static Data_0x23_Describe = "describe";

  // Data Beacon(0x28)
  //	 Data_0x28_Index = "index"
  static Data_0x28_Mac = "mac";
  static Data_0x28_Rssi = "rssi";
  static Data_0x28_Rssi_1m = "rssi_1m";
  static Data_0x28_Battery = "battery";
  static Data_0x28_IsLanLng = "isLanLng";
  static Data_0x28_Lat = "lat";
  static Data_0x28_Lng = "lng";
  static Data_0x28_IsDescribe = "isDescribe";
  static Data_0x28_Describe = "describe";

  // Data HomeWifi(0x2A)
  //	 Data_0x2A_Index = "index"
  static Data_0x2A_Mac = "mac";
  static Data_0x2A_Rssi = "rssi";
  static Data_0x2A_IsLanLng = "isLanLng";
  static Data_0x2A_Lat = "lat";
  static Data_0x2A_Lng = "lng";
  static Data_0x2A_IsDescribe = "isDescribe";
  static Data_0x2A_Describe = "describe";

  // Data WiFi(0x22)
  static Data_0x22_WifiList = "wifiList";
  static Data_0x22_Mac = "mac";
  static Data_0x22_Signal = "signal";
  static Data_0x22_Name = "name";

  // PetWalking(0x14)
  static Data_0x14_StartTime = "startTime";
  static Data_0x14_StopTime = "stopTime";

  // Data Call(0x25)
  static Data_0x25_DateTime = "dateTime";
  static Data_0x25_Number = "number";
  static Data_0x25_Time = "time";
  static Data_0x25_RetCode = "retCode";
  static Data_0x25_CallInOut = "callInOut";
  static Data_0x25_CallStatus = "callStatus";
  static Data_0x25_CallType = "callType";

  // Data Smart(0x27)
  static Data_0x27_Lat = "lat";
  static Data_0x27_Lng = "lng";
  static Data_0x27_Radius = "radius";
  static Data_0x27_Height = "height";

  // Data Step(0x30)
  static Data_0x30_DateTime = "dateTime";
  static Data_0x30_Step = "step";

  // Data Active(0x31)
  static Data_0x31_DateTime = "dateTime";
  static Data_0x31_Active = "active";

  // Data BeaconList(0x330x34)
  static Data_0x33_DateTime = "dateTime";
  static Data_0x33_CompanyId = "companyId";
  static Data_0x33_UUID = "uuid";
  static Data_0x33_Major = "major";
  static Data_0x33_Minor = "minor";
  static Data_0x33_Rssi_m = "rssi_m";
  static Data_0x33_Rssi_r = "rssi_r";
  static Data_0x33_List = "list";

  // Data Heart(0x40)
  static Data_0x40_DateTime = "dateTime";
  static Data_0x40_HeartRate = "heartRate";
  static Data_0x40_TrustLevel = "trustLevel";

  // Data SPO2(0x41)
  static Data_0x41_DateTime = "dateTime";
  static Data_0x41_SPO2Rate = "spo2Rate";
  static Data_0x41_TrustLevel = "trustLevel";

  // Config Key(0x02)
  static Config_0x01 = "module"; // Module
  static Config_0x02 = "version"; // Version
  static Config_0x03 = "IMEI"; // IMEI
  static Config_0x04 = "ICCID"; // ICCID
  static Config_0x05 = "MAC"; // MAC
  static Config_0x06 = "dateTime"; // DateTime
  static Config_0x07 = "runTime"; // RunTime
  static Config_0x08 = "firmware"; // Firmware
  static Config_0x09 = "mileage"; // Mileage
  static Config_0x0A = "workMode"; // WorkMode
  static Config_0x0B = "alarmClock"; // AlarmClock
  static Config_0x0C = "noDisturb"; // NoDisturb
  static Config_0x0D = "password"; // Password
  static Config_0x0E = "timeZone"; // TimeZone
  static Config_0x0F = "enableControl"; // Enable Control
  static Config_0x75 = "extraControl"; // Extra Enable Control
  static Config_0x10 = "ringToneVolume"; // RingToneVolume
  static Config_0x11 = "micVolume"; // MicVolume
  static Config_0x12 = "speakerVolume"; // SpeakerVolume
  static Config_0x13 = "deviceName"; // DeviceName
  static Config_0x14 = "battery"; // Battery
  static Config_0x15 = "bleLoc"; // BleLoc
  static Config_0x16 = "bleWhiteList"; // BleWhiteList
  static Config_0x17 = "smsgpsurl"; // Smsgpsurl
  static Config_0x18 = "smswifiurl"; // Smswifiurl
  static Config_0x19 = "music"; // Music
  static Config_0x1A = "fwVersion"; // FwVersion
  static Config_0x1B = "gsmModule"; // GsmModule
  static Config_0x1C = "promptVolume"; // PromptVolume
  static Config_0x1D = "agpsLoc"; // AgpsLoc
  static Config_0x1F = "locale"; // Locale
  // Button Setting
  static Config_0x20 = "sosButton"; // SOS Button
  static Config_0x21 = "call1Button"; // Call 1 Button
  static Config_0x22 = "call2Button"; // Call 2 Button
  // Phone Settings
  static Config_0x30 = "number"; // Set Authorized Number
  static Config_0x31 = "smsOption"; // SMS Reply Prefix Text
  static Config_0x32 = "sosOption"; // SOS Option
  static Config_0x33 = "phoneOption"; // Phone Switches
  static Config_0x34 = "numberNamePhoto"; // Set Authorized Number with Name and Photos（EV05）
  static Config_0x35 = "personalInfo"; // Set Personal Data Information（EV05）
  static Config_0x36 = "watch"; // Watch Settings (EV05 only)
  // GPRS Setting
  static Config_0x40 = "apn"; // APN
  static Config_0x41 = "apnUserName"; // Apn user name
  static Config_0x42 = "apnPassword"; // Apn password
  static Config_0x43 = "sever"; // Sever IP &Port
  static Config_0x44 = "timeInterval"; // Time interval
  static Config_0x45 = "continueLocate"; // Continue Locate
  static Config_0x46 = "heartRate"; // Heart Rate Interval
  static Config_0x4A = "wifiList"; // WIFI List
  static Config_0x4B = "catm"; // Cat-M Setting
  static Config_0x4C = "apnList"; // APN List
  static Config_0x4D = "apnNow"; // APN Now
  static Config_0x4E = "gsmBand"; // GSM band
  static Config_0x4F = "networkType"; // Network Type
  // Alert Settings
  static Config_0x50 = "powerLowAlert"; // Power Alert
  static Config_0x51 = "geoAlert"; // GEO Alert
  static Config_0x52 = "motionAlert"; // Motion Alert
  static Config_0x53 = "noMotionAlert"; // No-motion Alert
  static Config_0x54 = "overSpeedAlert"; // Over speed Alert
  static Config_0x55 = "tiltAlert"; // Tilt Alert
  static Config_0x56 = "fallDownAlert"; // Fall Down Alert
  static Config_0x57 = "welfareAlert"; // Welfare Check (EC03 Only)
  static Config_0x58 = "notificationAlert"; // Alert Notification (EV04 only)
  static Config_0x59 = "motionLevel"; // Motion level

  static Config_0x62 = "wifiWhiteList"; // WIFI White List
  static Config_0x63 = "nightMode"; // Night mode
  static Config_0x64 = "network"; // Mobile network information
  static Config_0x66 = "IMSI"; // IMSI
  static Config_0x67 = "homeWifiMatch"; // Home WiFi match number
  static Config_0x73 = "beaconList"; // Beacon location list

  static Config_0xF0 = "Read"; // Read

  static Config_0x19_bit0 = "bit0";
  static Config_0x19_bit1 = "bit1";
  static Config_0x19_bit2 = "bit2";
  static Config_0x19_bit3 = "bit3";
  static Config_0x19_bit4 = "bit4";
  static Config_0x19_bit5 = "bit5";
  static Config_0x19_bit6 = "bit6";
  static Config_0x19_bit7 = "bit7";
  static Config_0x19_bit8 = "bit8";
  static Config_0x19_bit9 = "bit9";
  static Config_0x19_bit10 = "bit10";
  static Config_0x19_bit11 = "bit11";
  static Config_0x19_bit12 = "bit12";
  static Config_0x19_bit13 = "bit13";
  static Config_0x19_bit14 = "bit14";
  static Config_0x19_bit15 = "bit15";
  static Config_0x19_bit16 = "bit16";
  static Config_0x19_bit17 = "bit17";
  static Config_0x19_bit18 = "bit18";
  static Config_0x19_bit19 = "bit19";
  static Config_0x19_bit20 = "bit20";
  static Config_0x19_bit21 = "bit21";
  static Config_0x19_bit22 = "bit22";
  static Config_0x19_bit23 = "bit23";
  static Config_0x19_bit24 = "bit24";
  static Config_0x19_bit25 = "bit25";
  static Config_0x19_bit26 = "bit26";
  static Config_0x19_bit27 = "bit27";
  static Config_0x19_bit28 = "bit28";
  static Config_0x19_bit29 = "bit29";
  static Config_0x19_bit30 = "bit30";
  static Config_0x19_bit31 = "bit31";
  // Services key(0x03)
  static Services_0x01 = "imei"; // IMEI
  static Services_0x10 = "heartBeat"; // Heart beat
  static Services_0x11 = "addresses"; // Get Addresses
  static Services_0x12 = "systemTime"; // Get Timestamp
  static Services_0x13 = "weather"; // Get Weather
  static Services_0x14 = "weather2"; // Get Weather2
  static Services_0x21 = "location_gsm"; // Get GSM Location
  static Services_0x22 = "location_wifi"; // Get WIFI Location
  static Services_0x24 = "status"; // General data

  static Services_0x11_lat = "lat";
  static Services_0x11_lng = "lng";
  static Services_0x11_address = "address";

  static Services_0x13_lat = "lat";
  static Services_0x13_lng = "lng";
  static Services_0x13_lang = "lang";

  // System key(0x04)
  static System_0x01 = "imei"; // IMEI
  static System_0x11 = "reFactory"; // ReFactory
  static System_0x12 = "reboot"; // Reboot
  static CMD_Find_Me = 0x13// find_me
  static System_0x14 = "shutdown"; // Shutdown
  static System_0x19 = "scanBeacon"; // ScanBeacon
  static System_0x1A = "scanWifiAuto"; // ScanWifiAuto
  static System_0x1B = "scanWifi"; // ScanWifi
  static System_0x31 = "heart"; // Heart (EV05 Only)

  static System_0x19_lat = "lat";
  static System_0x19_lng = "lng";
  static System_0x19_describe = "describe";

  static System_0x1A_lat = "lat";
  static System_0x1A_lng = "lng";
  static System_0x1A_describe = "describe";

  static System_0x1B_rssi = "rssi";
  static System_0x1B_interval = "interval";

  // Firmware Update key(0x7E)
  static Update_0x10 = "InitialData"; // Initial Data
  static Update_0x11 = "FirmwareData"; // Firmware Data
  static Update_0x12 = "Validate"; // Validate
  static Update_0x13 = "State"; // Update State
  static Update_0x15 = "PackSize"; // Update Pack Max len
  static Update_0x16 = "RequestData"; // Update Pack Max len

  static Update_address = "updateAddress";
  static Update_stateKey = "updateStateKey";
  static Update_packSize = "updatePackSize";
  static Update_offset = "offset";
  static Update_list = "list";
  static Update_length = "length";
  static Update_percent = "percent";

  // Response Data key(0x7F)
  static Response_ReturnStatus = "returnStatus"; // returnStatus
  static Response_Ok = "ok"; // Ok
  static Response_Error = "error"; // Error
  static Response_Msg = "msg"; // Message
  static Response_VersionError = "Version Invalid"; // VersionError
  static Response_EncryptError = "Encryption Invalid"; // EncryptError
  static Response_LengthError = "Length error"; // LengthError
  static Response_CRCError = "Check CRC error"; // CRCError
  static Response_CommandError = "Command Invalid"; // CommandError
  static Response_KeyError = "Key Invalid"; // KeyError
  static Response_KeyLengthError = "Key length error"; // KeyLengthError
  static Response_DataFormatError = "Data Format Invalid"; // DataFormatError
  static Response_DataSizeError = "Data Size Error"; // DataSizeError
  static Response_StateError = "Invalid State"; // StateError
  static Response_ParameterError = "Invalid Parameter"; // ParameterError
  static Response_NoMemoryError = "No Memory"; // NoMemoryError
  static Response_FunNoSuported = "Functiont not suported"; // funNoSuported
  static Response_GPSNoLocation = "GPS not Location"; // GPSNoLocation
  static Response_AddressError = "Address resolution Error"; // AddressError
  static Response_NoPasswordVerify = "No Password Verify"; // NoPasswordVerify
  static Response_LowBattery = "Battery Power Low"; // LowBattery
};
