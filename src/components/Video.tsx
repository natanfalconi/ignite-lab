import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">

                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula 01 - abertura
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Mollitia maiores doloribus nihil dolor eius at praesentium doloremque, expedita cum veritatis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Rem sequi molestias delectus fuga minima accusantium assumenda officiis. Minima harum debitis nulla.
                            Dolore praesentium qui natus in illum. Numquam quas illo inventore
                            magnam dolore nemo aliquam voluptas, iure, nam excepturi maiores alias libero obcaecati
                            quibusdam placeat debitis veniam animi nulla? Fugiat?
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src="https://avatars.githubusercontent.com/u/63966608?v=4"
                                alt="foto professor"
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Natan Falconi</strong>
                                <span className="text-gray-200 text-sm block">Estudante de Programação</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}