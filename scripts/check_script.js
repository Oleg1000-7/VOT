let test = document.querySelector('.test');

new Sortable(test, {
    animation: 500,
    ghostClass: 'element-choosen'
});

const searchParams = new URLSearchParams(window.location.search);
for (const param of searchParams) {
    console.log(param);
}
console.log(searchParams);

if (searchParams != null){
    document.querySelector('.header-test').innerHTML = `${document.querySelector('.header-test').innerHTML + searchParams.get("left_date")} - ${searchParams.get("right_date")}.`;
}

let data = {
    "Июнь 41": "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam deserunt ex error esse corporis doloremque.",
    "Июль 41": "2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quos atque tempore unde laboriosam eveniet repellat corporis nam dolores odio.",
    "Август 41": "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint praesentium nobis veritatis perspiciatis beatae architecto quisquam vitae a ipsam pariatur placeat iusto odit, excepturi consectetur earum neque dolor illum ullam facilis dolores aliquam minima id incidunt! Soluta, voluptas iusto!",
    "Сентябрь 41": "4Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quos atque tempore unde laboriosam eveniet repella.",
    "Октябрь 41": "5Lorem, ipsu unde laboriosam eveniet repellat corporis nam dolores odio.",
    "Ноябрь 41": "6 wekiutjhn dhrtjn bjr, tdbretnhf kjf, kjd"
}

let months = [
    "Июнь 1941",
    "Июль 1941",
    "Август 1941",
    "Сентябрь 1941",
    "Октябрь 1941",
    "Ноябрь 1941",
    "Декабрь 1941",
    "Январь 1942",
    "Февраль 1942",
    "Март 1942",
    "Апрель 1942",
    "Май 1942",
    "Июнь 1942",
    "Июль 1942",
    "Август 1942",
    "Сентябрь 1942",
    "Октябрь 1942",
    "Ноябрь 1942",
    "Декабрь 1942",
    "Январь 1943",
    "Февраль 1943",
    "Март 1943",
    "Апрель 1943",
    "Май 1943",
    "Июнь 1943",
    "Июль 1943",
    "Август 1943",
    "Сентябрь 1943",
    "Октябрь 1943",
    "Ноябрь 1943",
    "Декабрь 1943",
    "Январь 1944",
    "Февраль 1944",
    "Март 1944",
    "Апрель 1944",
    "Май 1944",
    "Июнь 1944",
    "Июль 1944",
    "Август 1944",
    "Сентябрь 1944",
    "Октябрь 1944",
    "Ноябрь 1944",
    "Декабрь 1944",
    "Январь 1945",
    "Февраль 1945",
    "Март 1945",
    "Апрель 1945",
    "Май 1945",
];

let test_months = months.slice(months.indexOf(searchParams.get("left_date")), months.indexOf(searchParams.get("right_date")) + 1)

let length = months.indexOf(searchParams.get("right_date")) + 1 - months.indexOf(searchParams.get("left_date"));
for (let i = 0; (i < 5) && (i < length); ++i){
    let r = Math.floor(Math.random() * (length - i)) + i;
    let month_ = test_months[r];
    test_months[r] = test_months[i];
    test_months[i] = month_;
}

for (let i = 0; (i < 5) && (i < length); ++i){
    let month = document.createElement("li");
    let fact = document.createElement("p");
    fact.textContent = test_months[i];
    month.appendChild(fact);
    test.appendChild(month);
}

function check() {
    let ans = test.querySelectorAll("p");
    let indexes_ans = [];
    for (let i = 0; (i < 5) && (i < length); ++i){
        console.log(ans[i].textContent);
        indexes_ans.push(months.indexOf(ans[i].textContent));
    }
    let right_indexes_ans = indexes_ans.slice();
    right_indexes_ans.sort(function(a, b) {
        return a - b;
    });
    console.log(indexes_ans, right_indexes_ans);
    if (right_indexes_ans.join() === indexes_ans.join()){
        console.log("МОЛОДЕЦ!!!!!!!!!!!!!!!!");
    }
    else{
        console.log("НЕПРАВИЛЬНО, ПОПРОБУЙ ЕЩЁ!");
    }
}

