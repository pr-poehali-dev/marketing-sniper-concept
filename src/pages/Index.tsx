import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        
        <div className={`relative max-w-5xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-primary/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-mono text-muted-foreground">2 из 3 проектов</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Я — ваш суперсолдат
            <br />
            <span className="text-primary">в борьбе за ваших клиентов</span>
          </h1>

          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Не агентство. Не конвейер.
            </p>
            <p className="text-lg md:text-xl text-foreground">
              Системный маркетинг, где считаются деньги, а не клики.
            </p>
          </div>

          <div className="pt-6">
            <p className="text-sm md:text-base text-muted-foreground mb-6 font-medium">
              Беру 2–3 проекта. Погружаюсь в экономику. Отвечаю за результат.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 animate-pulse-glow font-semibold tracking-wide"
            >
              → Обсудить задачу без презентаций
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary/50" />
        </div>
      </section>

      <section className="px-6 py-32 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Почему я не называю себя <span className="line-through text-muted-foreground">«Агентством»</span>
            <br />
            <span className="text-primary">и почему вам это выгодно</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary/80">Как это выглядит у вас</h3>
              <ul className="space-y-4">
                {['Красивые отчёты', 'Охваты растут', 'CTR высокий', 'Клики идут'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-foreground/70">
                    <Icon name="CheckCircle" size={20} className="text-primary/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-destructive/10 backdrop-blur border-destructive/30 relative overflow-hidden group hover:border-destructive transition-all duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] opacity-30 group-hover:opacity-60 transition-opacity">
                <span className="text-7xl font-black text-destructive border-8 border-destructive px-12 py-4">
                  ДЕНЕГ НЕТ
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-destructive">Что происходит на самом деле</h3>
              <ul className="space-y-4 relative z-10">
                {['Бюджет утекает', 'Сделок нет', 'Прибыль падает', 'Вопросов много'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-foreground/70">
                    <Icon name="XCircle" size={20} className="text-destructive flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-16 space-y-6 text-lg text-foreground/80 max-w-4xl mx-auto">
            <p>
              Агентства живут на конвейере. Чем больше клиентов — тем больше выручка. 
              Вашему проекту уделяют <span className="font-mono text-primary font-bold">2 часа в неделю</span>.
            </p>
            <p>
              Вам продают <span className="italic">«стратегию»</span>, <span className="italic">«креативы»</span>, 
              <span className="italic"> «аналитику»</span>. Но не продают <span className="font-bold text-primary">деньги</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Меня тошнит от этого подхода
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Потому что я вижу, как владельцы бизнеса теряют деньги, 
              веря в <span className="text-primary font-semibold">«охваты»</span> и <span className="text-primary font-semibold">«вовлечённость»</span>
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {[
              { num: '20+', text: 'проектов на одного специалиста', sub: 'В этот момент вашему проекту уже не до вас' },
              { num: '₽2M+', text: 'бюджет на входе в агентство', sub: 'Меньше — вы не интересны' },
              { num: '0', text: 'личной ответственности', sub: 'Менеджер ушёл — история потеряна' },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="p-8 bg-secondary/50 border-primary/20 hover:bg-secondary hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="font-mono text-6xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-semibold mb-2">{item.text}</p>
                    <p className="text-sm text-muted-foreground italic">{item.sub}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-primary">Снайпер</span>, а не пулемётчик
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">Кто я такой</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Target',
                title: 'Я не беру 10 проектов',
                front: '2–3 бизнеса максимум',
                back: 'Полное погружение в экономику вашего проекта'
              },
              {
                icon: 'Calculator',
                title: 'Я считаю экономику',
                front: 'Маржа, LTV, ROMI',
                back: 'Важнее охватов и лайков. Важны только деньги.'
              },
              {
                icon: 'TrendingUp',
                title: 'Мне плевать на CTR',
                front: 'Если сделок нет',
                back: 'Красивые метрики не платят за вашу ипотеку'
              },
              {
                icon: 'Brain',
                title: 'Офиса и штата нет',
                front: 'Только мозги и время',
                back: 'Вы платите за результат, не за аренду и зарплаты'
              },
            ].map((item, idx) => (
              <Card 
                key={idx}
                className="group h-72 [perspective:1000px] cursor-pointer"
              >
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 bg-card border-primary/20 border rounded-lg p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    <Icon name={item.icon} size={48} className="text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.front}</p>
                  </div>
                  
                  <div className="absolute inset-0 bg-primary/10 border-primary border-2 rounded-lg p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-base font-medium">{item.back}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Чем я отличаюсь <span className="text-primary">на самом деле</span>
          </h2>

          <div className="space-y-1 bg-secondary/30 rounded-lg overflow-hidden">
            {[
              { agency: 'Клики', me: 'Сделки' },
              { agency: 'Отчёты', me: 'Деньги' },
              { agency: 'Процессы', me: 'Результат' },
              { agency: 'Масштаб', me: 'Контроль' },
              { agency: 'Менеджер', me: 'Личная ответственность' },
            ].map((row, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-3 gap-4 p-4 hover:bg-primary/5 transition-colors group"
              >
                <div className="text-right text-muted-foreground group-hover:opacity-50 transition-opacity">
                  {row.agency}
                </div>
                <div className="text-center text-primary font-bold">VS</div>
                <div className="font-bold group-hover:text-primary transition-colors">
                  {row.me}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Почему мне можно <span className="text-primary">верить</span>
          </h2>

          <div className="mb-12">
            <p className="text-3xl font-bold text-primary mb-8">
              Моя репутация — мой единственный актив
            </p>
          </div>

          <div className="space-y-6 text-left text-lg text-foreground/80 max-w-3xl mx-auto bg-card/30 p-8 rounded-lg border border-primary/20">
            <p className="flex items-start gap-3">
              <Icon name="X" size={20} className="text-primary flex-shrink-0 mt-1" />
              <span>Я не продаю вам <span className="italic">«нейросети»</span> и <span className="italic">«секретные алгоритмы»</span></span>
            </p>
            <p className="flex items-start gap-3">
              <Icon name="X" size={20} className="text-primary flex-shrink-0 mt-1" />
              <span>Я не обещаю <span className="italic">«рост в 10 раз за месяц»</span></span>
            </p>
            <p className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
              <span>Маркетинг = <span className="font-mono text-primary font-bold">математика + психология</span></span>
            </p>
            <p className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
              <span>Правильное предложение → правильным людям → в правильный момент</span>
            </p>
          </div>

          <div className="mt-12 p-8 bg-primary/5 border-2 border-primary/30 rounded-lg">
            <p className="text-2xl font-mono font-bold text-primary mb-2">
              Предложение × Аудитория × Система = Деньги
            </p>
            <p className="text-sm text-muted-foreground">Всё остальное — детали</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Если вы устали терять деньги —
            <br />
            <span className="text-primary">давайте просто поговорим</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Без презентаций. Без обещаний. С разбором вашей ситуации.
          </p>

          <Button 
            size="lg" 
            className="text-xl px-12 py-8 animate-pulse-glow font-bold tracking-wide mb-4"
          >
            → Обсудить задачу
          </Button>

          <p className="text-sm text-muted-foreground italic mt-6">
            Я скажу, могу ли помочь. Если нет — скажу честно.
          </p>

          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 border border-primary/20 rounded-full">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
            </div>
            <span className="text-sm font-mono">Сейчас беру: 2 из 3 проектов</span>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 bg-secondary/50 border-t border-primary/10">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>Суперсолдат маркетинга. Работаю там, где считают деньги.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
