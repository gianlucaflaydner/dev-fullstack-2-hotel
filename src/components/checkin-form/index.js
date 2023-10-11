
export default function Checkin() {
    return (
        
        <section className='bg-slate-100 p-4 bg-opacity-20 px-10 rounded h-[400px] flex flex-col items-center justify-center'>
            <h1 className="text-2xl font-bold mb-4">Formulário de Check-in</h1>
            
            <form action="/processar_checkin" method="post" className="max-w-sm flex flex-col justify-center items-center">
                <div className="mb-4">
                    <label for="cpf" className="block text-gray-700 font-bold mb-2">CPF:</label>
                    <input type="text" id="cpf" name="cpf" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>

                <button type="submit" className="bg-primaryColor text-secondaryColor font-bold py-2 px-4 rounded">Enviar</button>
            </form>
        </section>
       

    );
};


