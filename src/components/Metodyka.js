import React, {useRef} from 'react';

export default function Metodyka() {

  
    const sectionRef = useRef(null);


    const handleButtonClick = () => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className='reactMtodykaContiner'>
      
      <div className='reactReduxContainer' ref={sectionRef}>
        <h1 className='Title'>Redux</h1>
        <hr />
        <span className='reactReduxDescription'>
        Redux to kontener stanu dla aplikacji JavaScript, który pomaga zarządzać stanem aplikacji w sposób przewidywalny i skalowalny. 
        Jest szczególnie przydatny w dużych aplikacjach, gdzie zarządzanie stanem może stać się skomplikowane.
        </span>
        <h1 className='reactHooksTitle'>Planowanie i Projektowanie</h1>
        <span className='reactReduxDescription'>
        Zanim zagłębimy się w proces tworzenia strony internetowej, ważne jest dokładne jej zaplanowanie i zaprojektowanie. Dobrze przemyślany plan pomoże nam upewnić się, że nasza strona spełnia swój zamierzony cel i skutecznie komunikuje się z grupą docelową. W tym temacie będziemy zgłębiać znaczenie planowania i projektowania strony internetowej oraz jak to ustawia scenę dla udanej obecności online.
        </span>
        <span className='reactReduxReasons'><b>1</b>Zdefiniuj cel strony, swoją publiczność i cele</span>
        <span className='reactReduxReasons'><b>2</b>Zbadaj konkurencję, analizuj zachowania publiczności i identyfikuj unikatowe atuty strony</span>
        <span className='reactReduxReasons'><b>3</b>Stwórz mapę strony, aby zilustrować strukturę i organizację strony</span>
        <span className='reactReduxReasons'><b>4</b>Stwórz wireframe, aby zilustrować układ i interfejs użytkownika</span>
      </div>

      <div className='reactReduxContainer'>
        <h1 className='reactHooksTitle'>Kolory</h1>
        <span className='reactReduxDescription'>
        Kolory odgrywają istotną rolę w naszym codziennym życiu, a ich wpływ jest szczególnie widoczny w świecie cyfrowym. Dobrze dobrany schemat kolorów może wywołać emocje, przekazywać znaczenie, a nawet wpływać na zachowanie użytkowników. W tym temacie zgłębimy świat teorii kolorów, eksplorując, jak kolory mogą być wykorzystane do stworzenia spójnej i angażującej tożsamości wizualnej naszej strony.
        </span>
        <span className='reactReduxReasons'><b>1</b>Zrozumieć podstawy teorii kolorów, w tym harmonię kolorów, kontrast i psychologię</span>
        <span className='reactReduxReasons'><b>2</b>Wybierz schemat kolorów, który pasuje do celu strony i publiczności</span>
        <span className='reactReduxReasons'><b>3</b>Użyj kolorów do przekazywania znaczeń, takich jak akcentowanie działań powracających lub podkreślanie kluczowych wiadomości</span>
        <span className='reactReduxReasons'><b>4</b>Ubezpiecz swoje kolorystykę, aby stworzyć spójny wygląd i odczucie</span>

        <h1 className='reactHooksTitle'>Znaczenie kolorów</h1>
        <span className='reactReduxReasons'><b>1</b>Czerwony - energia, akcja</span>
        <span className='reactReduxReasons'><b>2</b>Zielony - natura, stabilność</span>
        <span className='reactReduxReasons'><b>3</b>Żółty - optimism, żarliwość</span>
        <span className='reactReduxReasons'><b>4</b>Niebieski - spokojność, wiara</span>
        <span className='reactReduxReasons'><b>5</b>Fioletowy - kreatywność, sztuka</span>
        <span className='reactReduxReasons'><b>6</b>Pomarańczowy - kreatywność, innowacyjność</span>
        <span className='reactReduxReasons'><b>7</b>Biały - czystość, neutralność</span>
        <span className='reactReduxReasons'><b>8</b>Szary - neutralność, stabilność</span>
      </div>


      <div className='reactReduxContainer'>
        <h1 className='reactHooksTitle'>Układ</h1>
        <span className='reactReduxDescription'>
        Układ strony ma kluczowe znaczenie dla jej ogólnego sukcesu, ponieważ określa, jak użytkownicy poruszają się i wchodzą w interakcje z treścią. Dobrze zaprojektowany układ może sprawić, że strona będzie intuicyjna, łatwa w użyciu i estetycznie atrakcyjna, podczas gdy źle zaprojektowany układ może prowadzić do frustracji i dezorientacji. W tym temacie będziemy badać zasady dobrego projektowania układu i eksplorować sposoby tworzenia przyjaznej dla użytkowników i estetycznie przyjemnej strony.
        </span>
        <span className='reactReduxReasons'><b>1</b>Użyj systemów siatek, aby stworzyć strukturę układu i poprawić hierarchię wizualną</span>
        <span className='reactReduxReasons'><b>2</b>Organizuj treści za pomocą jasnej hierarchii,prioritując kluczowe informacje i tworząc spójny wizualny przepływ</span>
        <span className='reactReduxReasons'><b>3</b>Użyj pustości, aby stworzyć czysty i niezakłócony design</span>
        <span className='reactReduxReasons'><b>4</b>Wybierz typografię, która pasuje do celu strony i publiczności, dbając o czytelność</span>
      </div>

      <div className='reactReduxContainer'>
        <h1 className='reactHooksTitle'>Responsywsność i projektowanie</h1>
        <span className='reactReduxDescription'>
        W dzisiejszym cyfrowym krajobrazie istotne jest, aby zapewnić, że nasze strony internetowe są dostępne i użyteczne na różnych urządzeniach i rozmiarach ekranu. Projektowanie responsywne jest kluczowym elementem nowoczesnego rozwoju sieci, pozwalając nam tworzyć strony, które bezproblemowo dostosowują się do różnych urządzeń i rozmiarów ekranów. W tym temacie zgłębimy znaczenie projektowania responsywnego i dowiemy się, jak zaimplementować go w naszych własnych projektach.
        </span>
        <span className='reactReduxReasons'><b>1</b>Projektuj dla różnych urządzeń i rozdzielczości ekranu za pomocą principów projektowania odpowiadającego</span>
        <span className='reactReduxReasons'><b>2</b>Prioritetuj design mobilny, aby zapewnić łatwe korzystanie ze strony na mniejszych ekranach</span>
        <span className='reactReduxReasons'><b>3</b>Definiuj przypadki, aby zoptymalizować design dla różnych rozdzielczości ekranu i urządzeń</span>
        <span className='reactReduxReasons'><b>4</b>Testuj odpowiadanie strony na różnych urządzeniach, aby zapewnić spójny wizualny wypływ</span>
      </div>

      <div className='reactReduxContainer'>
        <h1 className='reactHooksTitle'>Responsywsność i projektowanie</h1>
        <span className='reactReduxDescription'>
        Treść stanowi podstawę każdej udanej strony internetowej, dostarczając użytkownikom cennej informacji, rozrywki lub obu. W tym temacie omówimy znaczenie tworzenia wysokiej jakości treści, która rezonuje z naszą grupą docelową, oraz eksplorować strategie organizowania i prezentowania treści w sposób angażujący użytkowników i zachęcający ich do działania.
        </span>
        <span className='reactReduxReasons'><b>1</b>Rozwijaj strategię treści, która pasuje do celu strony i publiczności</span>
        <span className='reactReduxReasons'><b>2</b>Pisz wysokiej jakości treści, które budzą zainteresowanie publiczności</span>
        <span className='reactReduxReasons'><b>3</b>Organizuj treści za pomocą jasnych nagłówków i podnagłówków oraz metaopisów</span>
        <span className='reactReduxReasons'><b>4</b>Użyj wysokiej jakości wizualnych elementów, takich jak zdjęcia i filmy, aby poprawić wizualny wypływ</span>
      </div>

      <button onClick={handleButtonClick} className='StepButton'>Do góry</button>
    </div>
  );
}


