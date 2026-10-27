import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
export const dynamic = "force-dynamic";
export async function GET(){try{const redis=Redis.fromEnv();const names=await Promise.all(Array.from({length:15},(_,i)=>redis.get<string>("doomsday:seat:"+(i+1))));return NextResponse.json({candidates:names.flatMap((name,i)=>name?[{slot:i+1,name}]:[])},{headers:{"Cache-Control":"no-store"}})}catch{return NextResponse.json({error:"Storage not configured",candidates:[]},{status:503})}}