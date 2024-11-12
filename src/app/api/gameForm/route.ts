import { CustomError, ServiceFactory } from "@/api/utils";
import { NextRequest, NextResponse } from "next/server";


const gameFormService = ServiceFactory.getGameFormService();

export async function POST(req: NextRequest) {

      try {

            const { name, email, country } = await req.json();

            const gameForm = await gameFormService.create({
                  name: name,
                  email: email,
                  country: country
            })

            return NextResponse.json(gameForm);

      } catch (error) {

            let status = 500;

            error instanceof CustomError ? status = error.status : null;

            return NextResponse.json(error, { status });

      }




}

export async function GET() {
      try {

            const gameForms = await gameFormService.findAll()

            return NextResponse.json(gameForms);


      } catch (error) {

            let status = 500;

            error instanceof CustomError ? status = error.status : null;

            return NextResponse.json(error, { status });

      }

}