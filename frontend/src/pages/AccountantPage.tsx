import React, { useState } from 'react';
import { DollarSign, FileText, Download, Search, Filter, Plus, ChevronDown } from 'lucide-react';

// Sample data for Moroccan reports
const bilanData = [
  { category: 'Actif', subCategory: 'Actif Immobilisé', amount: 500000 },
  { category: 'Actif', subCategory: 'Actif Circulant', amount: 300000 },
  { category: 'Passif', subCategory: 'Capitaux Propres', amount: 400000 },
  { category: 'Passif', subCategory: 'Dettes', amount: 400000 },
];

const cpcData = [
  { category: 'Produits', subCategory: 'Ventes', amount: 1000000 },
  { category: 'Charges', subCategory: 'Achats', amount: 600000 },
  { category: 'Charges', subCategory: 'Salaires', amount: 200000 },
  { category: 'Résultat', subCategory: 'Résultat Net', amount: 200000 },
];

const esgData = [
  { category: 'Marge Commerciale', amount: 400000 },
  { category: 'Valeur Ajoutée', amount: 300000 },
  { category: 'Excédent Brut d\'Exploitation', amount: 200000 },
  { category: 'Résultat d\'Exploitation', amount: 150000 },
];

const tftData = [
  { category: 'Activités d\'Exploitation', amount: 300000 },
  { category: 'Activités d\'Investissement', amount: -100000 },
  { category: 'Activités de Financement', amount: -50000 },
  { category: 'Trésorerie Nette', amount: 150000 },
];

const eticData = [
  { category: 'Informations sur les Immobilisations', amount: 500000 },
  { category: 'Informations sur les Stocks', amount: 100000 },
  { category: 'Informations sur les Dettes', amount: 400000 },
];

const isDeclarationData = [
  { category: 'Chiffre d\'Affaires', amount: 1000000 },
  { category: 'Charges Déductibles', amount: 600000 },
  { category: 'Résultat Fiscal', amount: 400000 },
  { category: 'Impôt sur les Sociétés', amount: 100000 },
];

const tvaDeclarationData = [
  { period: 'Janvier 2024', tvaCollectée: 50000, tvaDéductible: 30000, tvaNet: 20000 },
  { period: 'Février 2024', tvaCollectée: 60000, tvaDéductible: 35000, tvaNet: 25000 },
];

const irDeclarationData = [
  { category: 'Revenus Professionnels', amount: 500000 },
  { category: 'Charges Déductibles', amount: 200000 },
  { category: 'Revenu Net Imposable', amount: 300000 },
  { category: 'Impôt sur le Revenu', amount: 75000 },
];

const taxeProfessionnelleData = [
  { category: 'Base d\'Imposition', amount: 1000000 },
  { category: 'Taux d\'Imposition', amount: '10%' },
  { category: 'Montant de la Taxe', amount: 100000 },
];

const cnssReportsData = [
  { employee: 'John Doe', salaireBrut: 5000, cotisationCNSS: 500 },
  { employee: 'Jane Smith', salaireBrut: 6000, cotisationCNSS: 600 },
];

function AccountantPage() {
  const [reportType, setReportType] = useState('bilan');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState([]);

  const generateReport = () => {
    let data = [];
    switch (reportType) {
      case 'bilan':
        data = bilanData;
        break;
      case 'cpc':
        data = cpcData;
        break;
      case 'esg':
        data = esgData;
        break;
      case 'tft':
        data = tftData;
        break;
      case 'etic':
        data = eticData;
        break;
      case 'is-declaration':
        data = isDeclarationData;
        break;
      case 'tva-declaration':
        data = tvaDeclarationData;
        break;
      case 'ir-declaration':
        data = irDeclarationData;
        break;
      case 'taxe-professionnelle':
        data = taxeProfessionnelleData;
        break;
      case 'cnss-reports':
        data = cnssReportsData;
        break;
      default:
        break;
    }
    setReportData(data);
  };

  const downloadReport = (format) => {
    if (reportData.length === 0) {
      alert('No data to export. Please generate a report first.');
      return;
    }

    if (format === 'csv') {
      const headers = Object.keys(reportData[0]).join(',');
      const rows = reportData.map((item) => Object.values(item).join(',')).join('\n');
      const csvContent = `${headers}\n${rows}`;
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${reportType}_report.csv`;
      link.click();
    } else if (format === 'pdf') {
      alert('PDF export functionality will be implemented soon.');
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Accountant Dashboard</h1>
      </div>

      {/* Report Generation Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Generate Reports</h2>
        <div className="flex gap-4 mb-6">
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <option value="bilan">BILAN (Balance Sheet)</option>
            <option value="cpc">CPC - Compte de Produits et Charges (Income Statement)</option>
            <option value="esg">ESG - État des Soldes de Gestion (Management Balances)</option>
            <option value="tft">TFT - Tableau de Financement (Cash Flow Statement)</option>
            <option value="etic">ETIC - État des Informations Complémentaires (Additional Information Statement)</option>
            <option value="is-declaration">Déclaration IS (Corporate Tax Return)</option>
            <option value="tva-declaration">Déclarations TVA (Monthly/Quarterly VAT Returns)</option>
            <option value="ir-declaration">Déclaration IR (Personal Income Tax for Businesses)</option>
            <option value="taxe-professionnelle">Taxe Professionnelle (Business Tax)</option>
            <option value="cnss-reports">CNSS Reports (Social Security)</option>
          </select>
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span>to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={generateReport}
          >
            Generate Report
          </button>
        </div>
        {reportData.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Generated Report</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(reportData[0]).map((key) => (
                      <th
                        key={key}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reportData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {Object.values(row).map((value, idx) => (
                        <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={() => downloadReport('csv')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </button>
              <button
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => downloadReport('pdf')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountantPage;