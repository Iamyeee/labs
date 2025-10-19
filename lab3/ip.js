const ipToNumber = (ip = "192.168.1.1") => {
  const octets = ip.split(".");
  let result = 0;
  for (let i = 0; i < octets.length; i++) {
    result = (result << 8) + Number(octets[i]);
  }
  return result;
};

console.log(ipToNumber("10.10.10.10"));
console.log(ipToNumber("172.16.0.1"));
console.log(ipToNumber("192.168.1.1"));
console.log(ipToNumber("8.8.8.8"));
