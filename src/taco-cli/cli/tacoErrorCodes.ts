/// <reference path="../../typings/node.d.ts" />
"use strict";

// Error Codes: 1000- 1999
enum TacoErrorCode {
    CordovaCmdNotFound = 1001,
    CordovaCommandFailed,
    CordovaCommandFailedWithError,
    NotInCordovaProject,
    CommandBuildInvalidPlatformLocation,
    CommandBuildTacoSettingsNotFound,
    CommandNotBothDeviceEmulate,
    CommandNotBothDebugRelease,
    CommandNotBothLocalRemote,
    CommandRemotePlatformNotKnown,
    CommandCreateInvalidPath,
    CommandCreateNoPath,
    CommandCreateNotBothCliAndKit,
    CommandCreateNotBothTemplateAndCli,
    CommandCreateNotTemplateIfCustomWww,
    CommandCreateOnlyLocalCustomWww,
    CommandCreatePathNotEmpty,
    CommandCreateTacoJsonFileCreationError,
    CommandCreateTacoJsonFileWriteError,
    CommandCreateTemplatesUnavailable,
    CommandInstallCordovaTooOld,
    CommandSetupCantFindRemoteMount,
    CommandSetupConnectionRefused,
    CommandSetupNotfound,
    CommandSetupRemoteInvalidPin,
    CommandSetupRemoteInvalidPort,
    CommandSetupRemoteRejectedPin,
    CommandSetupTimedout,
    ErrorDownloadingRemoteBuild,
    ErrorHttpGet,
    ErrorUploadingRemoteBuild,
    ErrorDuringRemoteBuildSubmission,
    ErrorCertificateLoad,
    ErrorCertificatePathChmod,
    ErrorCertificateSave,
    ErrorCertificateSaveToPath,
    ErrorCertificateSaveWithErrorCode,
    ErrorFileAlreadyExists,
    ErrorIncompatibleOptions,
    ErrorInvalidPath,
    ErrorKitMetadataFileMalformed,
    ErrorTacoJsonMissingOrMalformed,
    ErrorPatchCreation,
    ErrorNoPlatformsFound,
    GetCertificateFailed,
    HttpGetFailed,
    InvalidBuildSubmission400,
    InvalidRemoteBuild,
    InvalidRemoteBuildClientCert,
    InvalidRemoteBuildUrl,
    NoCertificateFound,
    NoRemoteBuildIdFound,
    RemoteBuildError,
    RemoteBuildHostNotFound,
    RemoteBuildNoConnection,
    RemoteBuildNonSslConnectionReset,
    RemoteBuildSslConnectionReset,
    RemoteBuildStatusPollFailed,
    RemoteBuildUnsuccessful,
    UnsupportedPlatform,
    UnimplementedAbstractMethod
}

export = TacoErrorCode;
