
//existing class supporting showing errors  in message box
// let's say a new requirement came to log the errors to a webhook
// the commented class below shows what generally violates the open/close principle
/*
export class ErrorHandler {
    private messageBox: any;
    private _httpClient : any;
    private _endpoint: string = "api/log";
    
    // violation: we modified existing class by injecting httpclient 
    constructor(messageBox,httpClient) {
        this.messageBox = messageBox;
        this._httpClient=hhtpClient;
    }
     
    //violation: we added a new method for existing class 
    logError(errorObject): Promise<any> {
        return this._httpClient.post(this._endpoint, errorObject);
    }
    wrapError(err, publicResponse, severity) {
        let error = {
            originalError: err,
            publicResponse, 
            severity
        }
        if(severity < 5) {
            this.handleWarning("Warning", publicResponse);
        }
        else {
            this.handleError("Critical Error", publicResponse);
        }
    }

    private handleWarning(header, content) {
        this.messageBox.show(header, content);
    }

    private handleError(header, content) {
        this.messageBox.show(header, content);
    }
}
*/

// Existing class which is closed for modifications
export class ErrorHandler {
    private messageBox: any;

    constructor(messageBox) {
        this.messageBox = messageBox;
    }

    wrapError(err, publicResponse, severity) {
        let error = {
            originalError: err,
            publicResponse, 
            severity
        }
        if(severity < 5) {
            this.handleWarning("Warning", publicResponse);
        }
        else {
            this.handleError("Critical Error", publicResponse);
        }
    }

    private handleWarning(header, content) {
        this.messageBox.show(header, content);
    }

    private handleError(header, content) {
        this.messageBox.show(header, content);
    }
}

//Open a new  class for logging to webhook
export class ErrorLogger {
    private _endpoint: string = "api/log";
    
    constructor(private _httpClient) {

    }

    logError(errorObject): Promise<any> {
        return this._httpClient.post(this._endpoint, errorObject);
    }
}

// Extend the closed class to support existing functionality and support new functionality
export class ErrorHandlerWithLogging extends ErrorHandler {
    private _logger: ErrorLogger;
    
    constructor(messageBox,  logger: ErrorLogger) {
        super(messageBox);
        this._logger = logger;
    }

    wrapError(err, publicResponse, severity) {
        return this._logger.logError(err).then(() => {
            super.wrapError(err, publicResponse, severity);
        });
    }
}