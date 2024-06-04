import React, {useRef} from 'react';

export default function Analiza() {

  const sectionRef = useRef(null);


    const handleButtonClick = () => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };


  return (
    <div className='reactMtodykaContiner'>
      <div className='reactReduxContainer' ref={sectionRef}>
        <h1 className='Title'>DevOps vs DevSecOps</h1>
        <hr />
        <span className='reactReduxDescription'>
        DevOps to zestaw praktyk, które łączą programowanie oprogramowania (Dev) i operacje IT (Ops), aby poprawić współpracę, komunikację i szybkość dostarczania oprogramowania. Celem DevOps jest redukcja czasu, jaki potrzebny jest na dostarczenie aktualizacji oprogramowania i funkcji klientom, a także poprawa jakości i niezawodności tych aktualizacji.
        DevSecOps, odwrotnie, jest rozszerzeniem DevOps, które integruje praktyki i zasady bezpieczeństwa w całym cyklu życia rozwoju oprogramowania. Celem DevSecOps jest zapewnienie, aby bezpieczeństwo było integralną częścią każdego etapu rozwoju, od planowania do wdrożenia, aby zmniejszyć ryzyko wadałności i naruszeń zgodności.
        </span>
        <h1 className='reactHooksTitle'>Główne różnice</h1>
        <span className='reactReduxReasons'><b>1</b>DevOps koncentruje się na poprawie szybkości i jakości dostarczania oprogramowania, podczas gdy DevSecOps koncentruje się na zapewnieniu bezpieczeństwa i zgodności dostarczania oprogramowania</span>
        <span className='reactReduxReasons'><b>2</b>DevOps obejmuje szerszy zakres osób, w tym programistów, inżynierów testowych i zespół operacyjny. DevSecOps obejmuje szerszy zakres osób, w tym zespół bezpieczeństwa, programistów i zespół operacyjny</span>
        <span className='reactReduxReasons'><b>3</b>DevOps niekoniecznie obejmuje bezpieczeństwo jako integralną część swoich praktyk. DevSecOps, odwrotnie, integruje bezpieczeństwo jako krytyczną część swoich praktyk</span> 
      </div>

      <div className='reactReduxContainer'>
        <h1 className='reactHooksTitle'>Wady, które mogą naprawić</h1>
        <span className='reactReduxReasons'><b>1</b>DevOps i DevSecOps mogą pomóc mostować lukę w komunikacji między zespołem programistycznym a zespołem operacyjnym poprzez zapewnienie, że wszyscy uczestnicy są świadomi zmian i potencjalnych problemów</span>
        <span className='reactReduxReasons'><b>2</b>DevSecOps może pomóc identyfikacji i naprawie niesprawnych praktyk programistycznych poprzez integrację testowania bezpieczeństwa i skanowania luk w celu identyfikacji wadałności</span>
        <span className='reactReduxReasons'><b>3</b>DevOps i DevSecOps mogą pomóc identyfikacji braku testowania poprzez zapewnienie, że wszystkie aspekty dostarczania oprogramowania są dokładnie testowane</span> 
        <span className='reactReduxReasons'><b>4</b>DevSecOps może pomóc identyfikacji i naprawie niesprawnych konfiguracji poprzez integrację zarządzania konfiguracją bezpieczeństwa w celu identyfikacji luk w konfiguracji</span>
        <span className='reactReduxReasons'><b>5</b>DevSecOps może pomóc identyfikacji braku monitorowania poprzez zapewnienie, że wszystkie aspekty dostarczania oprogramowania są monitorowane w celu wykrycia problemów bezpieczeństwa i wydajności</span> 
      </div>

      <div className='reactReduxContainer'>
        <h1 className='reactHooksTitle'>Jak mogą je naprawić</h1>
        <span className='reactReduxReasons'><b>1</b>Implementacja ciągłej integracji i ciągłego wdrożenia (CI/CD): CI/CD pipeline mogą automatyzować testowanie, walidację i wdrożenie aktualizacji oprogramowania, redukując ryzyko błędów ludzkich</span>
        <span className='reactReduxReasons'><b>2</b>Integracja testowania bezpieczeństwa: Integracja narzędzi testowych bezpieczeństwa w pipeline CI/CD może pomóc wykryć wadałności wcześniej w cykl rozwoju</span>
        <span className='reactReduxReasons'><b>3</b>Użycie niesprawnych praktyk programistycznych: Implementacja niesprawnych praktyk programistycznych, takich jakwalidacja wejściowych danych, obsługa błędów i bezpieczne magazyny danych</span> 
        <span className='reactReduxReasons'><b>4</b>Konfiguracja ustawień bezpieczeństwa: Konfiguracja ustawień bezpieczeństwa, takich jakreguły firewalla, kontrola dostępu i szyfrowanie, aby zapewnić sprawne konfiguracje</span>
        <span className='reactReduxReasons'><b>5</b>Monitorowanie problemów bezpieczeństwa: Implementacja narzędzi monitorowania problemów bezpieczeństwa, takich jak skanery luk i systemy wykrywania intruzji, aby wykryć problemy bezpieczeństwa w czasie rzeczywistym</span> 
        <span className='reactReduxReasons'><b>6</b>Rozwój planu odpowiedzi na incydenty: Rozwój planu odpowiedzi na incydenty aby szybko reagować na incydenty bezpieczeństwa i minimalizować ich wpływ</span>
        <span className='reactReduxReasons'><b>7</b>Pomalanie szkolenia i edukacji: Pomalanie szkolenia i edukacji dla programistów na temat niesprawnych praktyk programistycznych i najlepszych praktykach bezpieczeństwa</span> 
      </div>

      <button onClick={handleButtonClick} className='StepButton'>Do góry</button>
    </div>
  );
}


