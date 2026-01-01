const randomString = Math.random().toString(36).substring(2, 15);

const handleInterval = () => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}

setInterval(handleInterval, 5000);