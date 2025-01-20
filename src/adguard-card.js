import { LitElement, html, css } from "lit";

class AdGuardCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _expanded: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._expanded = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
      ha-card {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }
      .card-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        padding: 0 16px 16px;
      }
      .stat-item {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .stat-content {
        display: flex;
        flex-direction: column;
      }
      .stat-label {
        font-size: 0.875rem;
        color: var(--secondary-text-color);
      }
      .stat-value {
        font-size: 1.25rem;
        font-weight: 500;
      }
      .switches {
        border-top: 1px solid var(--divider-color);
        padding: 16px;
      }
      .switch-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
      }
      .switch-label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .expand-button {
        width: 100%;
        padding: 16px;
        background: none;
        border: none;
        border-top: 1px solid var(--divider-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        color: var(--primary-text-color);
      }
      .rotate {
        transform: rotate(180deg);
      }
    `;
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const stats = {
      queries:
        this.hass.states["sensor.adguard_home_dns_query_s"]?.state || "0",
      blocked:
        this.hass.states["sensor.adguard_home_aantal_dns_query_s_geblokkeerd"]
          ?.state || "0",
      ratio:
        this.hass.states["sensor.adguard_home_dns_query_s_geblokkeerd_ratio"]
          ?.state || "0",
      speed:
        this.hass.states["sensor.adguard_home_gemiddelde_verwerkingssnelheid"]
          ?.state || "0",
    };

    const switches = {
      protection:
        this.hass.states["switch.adguard_home_bescherming"]?.state === "on",
      filtering:
        this.hass.states["switch.adguard_home_filteren"]?.state === "on",
      parental:
        this.hass.states["switch.adguard_home_ouderlijk_toezicht"]?.state ===
        "on",
      queryLog:
        this.hass.states["switch.adguard_home_query_logboek"]?.state === "on",
      safeBrowsing:
        this.hass.states["switch.adguard_home_veilig_browsen"]?.state === "on",
      safeSearch:
        this.hass.states["switch.adguard_home_veilig_zoeken"]?.state === "on",
    };

    return html`
      <ha-card>
        <div class="card-header">
          <ha-icon icon="mdi:shield"></ha-icon>
          <h2>AdGuard Home</h2>
        </div>

        <div class="stats-grid">
          <div class="stat-item">
            <ha-icon
              icon="mdi:chart-line"
              style="color: var(--success-color)"
            ></ha-icon>
            <div class="stat-content">
              <span class="stat-label">DNS Queries</span>
              <span class="stat-value">${stats.queries}</span>
            </div>
          </div>
          <div class="stat-item">
            <ha-icon
              icon="mdi:block-helper"
              style="color: var(--error-color)"
            ></ha-icon>
            <div class="stat-content">
              <span class="stat-label">Geblokkeerd</span>
              <span class="stat-value">${stats.blocked}</span>
            </div>
          </div>
          <div class="stat-item">
            <ha-icon
              icon="mdi:shield"
              style="color: var(--info-color)"
            ></ha-icon>
            <div class="stat-content">
              <span class="stat-label">Blokkerings Ratio</span>
              <span class="stat-value">${stats.ratio}%</span>
            </div>
          </div>
          <div class="stat-item">
            <ha-icon
              icon="mdi:clock"
              style="color: var(--warning-color)"
            ></ha-icon>
            <div class="stat-content">
              <span class="stat-label">Verwerkingssnelheid</span>
              <span class="stat-value">${stats.speed}ms</span>
            </div>
          </div>
        </div>

        <div class="switches">
          ${this._renderSwitch(
            "Bescherming",
            "mdi:shield",
            "protection",
            switches.protection
          )}
          ${this._renderSwitch(
            "Filteren",
            "mdi:block-helper",
            "filtering",
            switches.filtering
          )}
          ${this._renderSwitch(
            "Ouderlijk toezicht",
            "mdi:account-child",
            "parental",
            switches.parental
          )}
          ${this._renderSwitch(
            "Query logboek",
            "mdi:book-open",
            "queryLog",
            switches.queryLog
          )}
          ${this._renderSwitch(
            "Veilig browsen",
            "mdi:shield-check",
            "safeBrowsing",
            switches.safeBrowsing
          )}
          ${this._renderSwitch(
            "Veilig zoeken",
            "mdi:magnify",
            "safeSearch",
            switches.safeSearch
          )}
        </div>

        <button class="expand-button" @click=${this._toggleExpanded}>
          <span>Extra Statistieken</span>
          <ha-icon
            icon="mdi:chevron-down"
            class="${this._expanded ? "rotate" : ""}"
          ></ha-icon>
        </button>

        ${this._expanded ? this._renderExtraStats() : ""}
      </ha-card>
    `;
  }

  _renderSwitch(label, icon, entity, checked) {
    return html`
      <div class="switch-row">
        <div class="switch-label">
          <ha-icon icon="${icon}"></ha-icon>
          <span>${label}</span>
        </div>
        <ha-switch
          .checked=${checked}
          @change=${(e) => this._toggleSwitch(entity, e.target.checked)}
        ></ha-switch>
      </div>
    `;
  }

  _renderExtraStats() {
    const extraStats = {
      rules:
        this.hass.states["sensor.adguard_home_aantal_regels"]?.state || "0",
      parentalBlocked:
        this.hass.states["sensor.adguard_home_ouderlijk_toezicht_geblokkeerd"]
          ?.state || "0",
      safeSearchEnforced:
        this.hass.states["sensor.adguard_home_veilig_zoeken_afgedwongen"]
          ?.state || "0",
      safeSearchBlocked:
        this.hass.states["sensor.adguard_home_veilig_zoeken_geblokkeerd"]
          ?.state || "0",
    };

    return html`
      <div class="stats-grid" style="padding-top: 16px;">
        <div class="stat-item">
          <ha-icon icon="mdi:format-list-numbered"></ha-icon>
          <div class="stat-content">
            <span class="stat-label">Aantal Regels</span>
            <span class="stat-value">${extraStats.rules}</span>
          </div>
        </div>
        <div class="stat-item">
          <ha-icon icon="mdi:account-child-outline"></ha-icon>
          <div class="stat-content">
            <span class="stat-label">Ouderlijk Toezicht Geblokkeerd</span>
            <span class="stat-value">${extraStats.parentalBlocked}</span>
          </div>
        </div>
        <div class="stat-item">
          <ha-icon icon="mdi:magnify-scan"></ha-icon>
          <div class="stat-content">
            <span class="stat-label">Veilig Zoeken Afgedwongen</span>
            <span class="stat-value">${extraStats.safeSearchEnforced}</span>
          </div>
        </div>
        <div class="stat-item">
          <ha-icon icon="mdi:magnify-close"></ha-icon>
          <div class="stat-content">
            <span class="stat-label">Veilig Zoeken Geblokkeerd</span>
            <span class="stat-value">${extraStats.safeSearchBlocked}</span>
          </div>
        </div>
      </div>
    `;
  }

  _toggleExpanded() {
    this._expanded = !this._expanded;
  }

  _toggleSwitch(entity, checked) {
    const service = checked ? "turn_on" : "turn_off";
    const domain = "switch";
    const entityId = `switch.adguard_home_${entity}`;

    this.hass.callService(domain, service, {
      entity_id: entityId,
    });
  }

  setConfig(config) {
    this.config = config;
  }

  getCardSize() {
    return 6;
  }
}

customElements.define("adguard-card", AdGuardCard);
