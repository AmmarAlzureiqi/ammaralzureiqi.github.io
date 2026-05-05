<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com/?font=DM+Sans&weight=500&size=28&duration=3000&pause=1500&color=8B5E3C&center=true&vCenter=true&multiline=false&width=600&height=45&lines=Building+ML+infrastructure+at+scale;Optimizing+LLM+inference+pipelines;Orchestrating+with+Kubernetes+%26+Flyte;Shipping+agentic+AI+to+production)](https://alzureiqi.dev)

</div>

<br>

<table>
<tr>
<td>

**Ammar Alzureiqi**

Software developer, MLOps. Building ML platform infra by day, tinkering with inference and agents by night.

UIUC (MS CS) · Western (BS Stats)

</td>
<td>

```
currently:    LLM inference, agentic AI, ML platforms
learning:     TRT-LLM, Triton, vLLM, Dynamo
interested:   LLM eval at scale, agent infra, inference ops
languages:    Python, Go, TypeScript
```

</td>
</tr>
</table>

---

```mermaid
graph LR
    subgraph Lang[" "]
        Python:::lang
        TypeScript:::lang
        Go:::lang
    end

    subgraph ML["ML / AI"]
        PyTorch:::ml
        LangChain:::ml --> LangGraph:::ml
        Inference["LLM Inference"]:::ml
    end

    subgraph Infra["Infrastructure"]
        K8s["Kubernetes"]:::infra --> Flyte:::infra
        K8s --> Docker:::infra
        AWS:::infra
    end

    subgraph Obs["Observability"]
        Grafana["Grafana LGTM"]:::obs
        LangFuse:::obs
    end

    Python --> PyTorch
    Python --> LangChain
    Python --> Inference
    Python --> Flyte
    Go --> K8s
    K8s --> Grafana
    Inference --> Grafana
    Inference --> LangFuse
    Flyte --> AWS

    classDef lang fill:#8B5E3C22,stroke:#8B5E3C,color:#3D2E1F
    classDef ml fill:#A0764A22,stroke:#A0764A,color:#3D2E1F
    classDef infra fill:#6B8E7B22,stroke:#6B8E7B,color:#3D2E1F
    classDef obs fill:#C4956A22,stroke:#C4956A,color:#3D2E1F
```

<details>
<summary>full toolbox</summary>
<br>

| | |
|:--|:--|
| **Inference** | TRT-LLM, Triton, Dynamo, vLLM |
| **ML / AI** | PyTorch, LangChain, LangGraph |
| **Orchestration** | Kubernetes, Flyte, Docker |
| **Observability** | Grafana LGTM, LangFuse, OpenLLMetry |
| **Cloud** | AWS |
| **Data** | PostgreSQL, ChromaDB |

</details>

---

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=AmmarAlzureiqi&show_icons=true&hide_border=true&bg_color=00000000&title_color=8B5E3C&icon_color=A0764A&text_color=6B5B4F&hide=contribs&rank_icon=percentile" alt="GitHub Stats" height="150" />
<img src="https://github-readme-stats.vercel.app/api/top-langs?username=AmmarAlzureiqi&layout=compact&hide_border=true&bg_color=00000000&title_color=8B5E3C&text_color=6B5B4F&langs_count=6&hide=jupyter%20notebook,html,css,scss" alt="Top Languages" height="150" />

</div>

---

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/AmmarAlzureiqi/AmmarAlzureiqi/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/AmmarAlzureiqi/AmmarAlzureiqi/output/github-snake.svg" />
  <img alt="contribution snake" src="https://raw.githubusercontent.com/AmmarAlzureiqi/AmmarAlzureiqi/output/github-snake.svg" />
</picture>

</div>

---

<div align="center">

[alzureiqi.dev](https://alzureiqi.dev) · [LinkedIn](https://linkedin.com/in/AmmarAlzureiqi) · [alzureiqi3@gmail.com](mailto:alzureiqi3@gmail.com)

</div>

<!-- If you're reading the source, try the Konami code on the site. Or press ⌘K. -->
