import Redis from "ioredis";

const redisClient = new Redis({
    host: "redis_intellixio",
    port: 6379,
});


redisClient.on("error", (err) => {
    console.error("Redis Error:", err);
});

export default redisClient;
