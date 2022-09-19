function App() {
  return (
    <body>
      <header>
        <h1>
          Curriculo<br />
          <span>Axel Felipe Oliveira Novais</span>
        </h1>
        <nav id="principal">
          <h2>
            Navegação Principal
          </h2>
          <ol>
            <li>
              <a href="aula1.html">inicio</a>
            </li>
            <li>
              <a href="sobremim.html">Sobre Mim</a>
            </li>
            <li>
              <a href="contato.html">contato</a>
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <header>
          <h2>
            Formação Academica
          </h2>
        </header>
        <article>
          <h4>
            ensino medio
          </h4>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais
            interessantis.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis
            nisl.Paisis, filhis, espiritis santis.Si num tem leite então bota uma pinga aí cumpadi!
          </p>
        </article>
        <article>
          <h4>
            faculdade
          </h4>
          <aside>
            Facauldade Cruzeiro do Sul<br />
            Campus Paulista
            <p>
              A ordem dos tratores não altera o pão duris.Quem num gosta di mim que vai caçá sua turmis!Posuere
              libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Suco de cevadiss deixa
              as pessoas mais interessantis.
            </p>
          </aside>
          <p>
            Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Não sou faixa
            preta cumpadi, sou preto inteiris, inteiris.Quem num gosta di mim que vai caçá sua turmis!Viva
            Forevis aptent taciti sociosqu ad litora torquent.
          </p>
        </article>

        <section>
          <h2>Cursos realizados</h2><br />
          <h3>Linguagem de programação</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
          <h3>FrameWorks</h3>
          <ul>
            <li>Angular</li>
            <li>BootStrap</li>
            <li>SpringBoot</li>
          </ul>
          <h3>extras</h3>
          <ul>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
          <footer>
            Atualizado 2022
          </footer>
        </section>
      </main>
      <section>
        <h3>
          dados pessoais
        </h3>
        <article>
          <h4>Documentos</h4>
          <ol>
            <li>identidade</li>
            <li>documento aleatorio</li>
            <li>documento aleatorio</li>
          </ol>
        </article>
        <article>
          <h5>
            dados de contato
          </h5>
          <a href="mailto:axel_teste@hotmail.com">
            axel_teste@hotmail.com
          </a>
        </article>
      </section>
      <section>
        <h5>experiencias profissionais</h5>
        <aside>
          Empresa: Marcelo T Nalita CRM S.A
          Cargo:Estoquista<br />
          <p>
            Resposabilidades: Organizar produtos do estoque, abastecer loja.<br />
            Receber mercadorias e registrar em sistema, conferencia de produtos fora da validade.<br />
            Atualização de preços.
          </p>
        </aside>
        <header>
          inicio 01/04/2019<br />
          Termino 17/02/2020
        </header>

        <aside>
          Empresa: TeleperformanceCRM S.A<br />
          Cargo:Operador de Telemarketing Ativo e Receptivo
          <p>
            Resposabilidades: Auxiliar usuarios com relação as suas contas correntes, utilização do app.<br />
            Instabilidades em pagamentos via boleto, pix e QRcode, transferências bancarias, depositos,<br /> emprestimos e abrir chamados de bugs.<br />
            Via E-mail e voz
          </p>
        </aside>
        <header>
          inicio 17/10/2020<br />
          Termino 05/01/2022
        </header>
      </section>
      <aside>
        <h4>Horários de estudo</h4>
        <table  id="teste">
          <thead>
            <tr>
              <th>
                Dias da semana
              </th>
              <th>
                Seg
              </th>
              <th>
                Ter
              </th>
              <th>
                Qua
              </th>
              <th>
                Qui
              </th>
              <th>
                Sex
              </th>
            </tr>
          </thead>
          <tr>
            <td >Manhã</td>
            <td >Java</td>
            <td >SpringBoot</td>
            <td>NoSql</td>
            <td>SQL</td>
            <td >JavaScript</td>
          </tr>

          <tr>
            <td>tarde</td>
            <td>Angular</td>
          </tr>
          <tfoot>
            <tr>
              <th>
                Atividades extras
              </th>
              <th>
                design patterns
              </th>
              <th>
                Arquitetura mvc
              </th>
              <th>
                Docker
              </th>
              <th>
                API
              </th>
              <th>
                Protocolo HTTP
              </th>
            </tr>
          </tfoot>
        </table>
      </aside>
      <footer>
        <h2>links</h2>
        <nav>
          <a href="https://www.linkedin.com/in/axel-novais-1533491a5/">
            LinkedIn
          </a>
          <a href="https://github.com/FelipeAxel">
            GitHub
          </a>
        </nav>
      </footer>
    </body>
  );
}

export default App;
