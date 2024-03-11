const {exec} = require('child_process');
const os = require('os');

function shutdownComputer(){
    const operatingSystem = os.platform();
    let shutdownCommand;

    if(operatingSystem === 'win32'){
        shutdownCommand = 'shutdown /s /t 0';
    }else if(operatingSystem === 'linux'){
        shutdownCommand = 'sudo shutdown now';
    }else{
        console.error('Operating system not supported.');
        return;
    }
    
    exec(shutdownCommand, (error, stdout, stderr)=>{
        if(error){
            console.error(`Computer shutdown error: ${error.message}`);
            return;
        }
        if(stderr){
            console.error(`Computer shutdown error: ${stderr}`);
        }
        console.log(`Computer shut down: ${stdout}`);
    })
}

shutdownComputer();