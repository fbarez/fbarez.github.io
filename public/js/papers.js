const PAPERS = [
    {
        title: "Detecting Edit Failures In Large Language Models: An Improved Specificity Benchmark",
        year: "2023",
        authors: "Fazl Barez*, Julia Persson*, Ioannis Konstas Esben Kran, and Jason Hoelscher-Obermaier*",
        abstract: "Recent model editing techniques promise to mitigate the problem of memorizing false or outdated associations during LLM training. However, we show that these techniques can introduce large unwanted side effects which are not detected by existing specificity benchmarks. We extend the existing CounterFact benchmark to include a dynamic component and dub our benchmark CounterFact+. Additionally, we extend the metrics used for measuring specificity by a principled KL divergence-based metric. We use this improved benchmark to evaluate recent model editing techniques and find that they suffer from low specificity. Our findings highlight the need for improved specificity benchmarks that identify and prevent unwanted side effects.",
        bibtex: `@article{fbarez2023detecting,
  title = {Detecting Edit Failures In Large Language Models: An Improved Specificity Benchmark},
  author = {Barez*, Fazl and Persson*, Julia and Esben Kran, Ioannis Konstas and Hoelscher-Obermaier*, Jason},
  year = {2023},
  publisher = {Courier Corporation},
  conference = {Findings of the Association for Computational Linguistics},
}`,
        arxiv: "2305.17553",
        img: "img/generic.jpg"
    },
    {
        title: "The Larger they are, the Harder they Fail: Language Models do not Recognize Identifier Swaps in Python",
        year: "2023",
        authors: "Antonio Valerio Miceli Barone*, Fazl Barez*, Ioannis Konstas, and Shay B Cohen",
        abstract: "Large Language Models (LLMs) have successfully been applied to code generation tasks, raising the question of how well these models understand programming. Typical programming languages have invariances and equivariances in their semantics that human programmers intuitively understand and exploit, such as the (near) invariance to the renaming of identifiers. We show that LLMs not only fail to properly generate correct Python code when default function names are swapped, but some of them even become more confident in their incorrect predictions as the model size increases, an instance of the recently discovered phenomenon of Inverse Scaling, which runs contrary to the commonly observed trend of increasing prediction quality with increasing model size. Our findings indicate that, despite their astonishing typical-case performance, LLMs still lack a deep, abstract understanding of the content they manipulate, making them unsuitable for tasks that statistically deviate from their training data, and that mere scaling is not enough to achieve such capability.",
        bibtex: `@article{valerio2023the,
  title = {The Larger they are, the Harder they Fail: Language Models do not Recognize Identifier Swaps in Python},
  author = {Barone*, Antonio Valerio Miceli and Barez*, Fazl and Konstas, Ioannis and Cohen, Shay B},
  year = {2023},
  publisher = {Courier Corporation},
}`,
        arxiv: "2305.15507",
        img: "img/generic.jpg"
    },
]

for (let PAPER of PAPERS) {
    document.getElementById("pubCards").insertAdjacentHTML("beforeend", `
    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="${PAPER.img}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <h5 class="card-title fs-6">${PAPER.title}
                                    </h5>
                                    <p class="card-text fs-6">${PAPER.authors}</p>
                                    <p class="card-text">
                                        <span class="badge bg-primary" data-bs-placement="bottom" data-bs-toggle="popover" data-bs-content="${PAPER.abstract}">Abstract</span>
                                        <a class="badge bg-secondary" href="https://www.catalyzex.com/paper/arxiv:${PAPER.arxiv}/code">Code</a>
                                        <a class="badge bg-success" href="https://arxiv.org/abs/${PAPER.arxiv}">Arxiv</a>
                                        <span class="badge bg-danger" data-bs-placement="bottom" data-bs-toggle="popover" data-bs-content="${PAPER.bibtex}">Bibtex</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
    `)
}