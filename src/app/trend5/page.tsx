import HomeButton from '@/components/homebutton'
import Trend5Interface from '@/components/trend5Interface'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { queryDB } from '../api/oracleFunctions'

async function page5() {

  const response = await queryDB('');

  const dataset = []
  for(let i = 0; i < response.length; i++) {
    let temp = {
      year: response[i][0].toString(),
      a: response[i][1],
      b: response[i][2],
      c: response[i][3],
      d: response[i][4],
      f: response[i][5],
      g: response[i][6],
      h: response[i][7],
      i: response[i][8],
      j: response[i][9],
      k: response[i][10],
      l: response[i][11],
      o: response[i][12],
      p: response[i][13],
      s: response[i][14],
      u: response[i][15],
      v: response[i][16],
      w: response[i][17],
      x: response[i][18],
      z: response[i][19],
    }
    dataset[i] = temp;
  }
  console.log(dataset);

  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percent of crimes ending in an arrest against each race</h1>
      </div>
      <Trend5Interface
      data={dataset}
      />
      <div className="fixed left-9">
        <Button asChild>
          <Link href="/trend4">
            Previous
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default page5