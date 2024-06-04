import { NextResponse } from 'next/server';

const users = [
  { name: 'Anna', age: '23' },
  { name: 'Anna', age: '27' },
];
export function GET() {
  return NextResponse.json(users);
}
