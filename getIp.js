
function infoIp(paramIp) {
    const Ip_ = [];
    let scor = 1;
    Object.keys(paramIp).forEach(function(name){
        paramIp[name].forEach(function (iface) {
            if(iface.family === 4 && iface.internal !== false){
                localIp = iface.address;
                Ip_.push(`Локальный ip адрес: ${localIp}`);
            }
            if(iface.family === 4 && iface.internal === false){
                externalIp = iface.address;
                Ip_.push(`Внешний ip адрес(v4) ${+scor}: ${externalIp}  имя устройства "${name}"`);
                scor++;
            }
        })
    })
    return Ip_;
}

module.exports = infoIp;