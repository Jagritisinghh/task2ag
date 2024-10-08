const Invoice = require('../models/Invoice');

// Function to create dummy billing, invoice, and payment data
exports.createDummyInvoice = async (req, res) => {
  try {
    const recruiterId = '63f4b9c8c8e8a2b23e9fcb88'; // Example recruiter ID, replace with actual recruiter ID from your database

    // Create dummy invoices
    const invoice1 = new Invoice({
      recruiterId,
      invoiceDate: new Date('2024-09-15'),
      invoiceAmount: 5000,
      paymentStatus: 'paid',
      invoiceLink: 'https://example.com/invoice1.pdf',
    });

    const invoice2 = new Invoice({
      recruiterId,
      invoiceDate: new Date('2024-09-20'),
      invoiceAmount: 10000,
      paymentStatus: 'pending',
      invoiceLink: 'https://example.com/invoice2.pdf',
    });

    await invoice1.save();
    await invoice2.save();

  

    res.status(201).json({
      message: 'invoice data created successfully!',
      invoices: [invoice1, invoice2],
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating dummy data', error });
  }
};


// dowload invoice

// backend: invoiceController.js

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');


exports.generateInvoicePDF = (req, res) => {
  const invoiceId = req.params.id;

  // Example invoice data (replace with actual DB data)
  const invoiceData = {
    invoiceDate: '2024-07-05',
    invoiceNumber: '001',
    recruiterName: 'Rahul Sharma',
    recruiterAddress: '123 Main St, Mumbai, Maharashtra 400001',
    recruiterPhone: '+91 1234567890',
    recruiterEmail: 'Rahul@gmail.com',
    courseName: 'JavaScript Basics',
    coursePrice: '1999',
    discount: '999',
    gst: '180',
    total: '1180',
  };

  // Create a new PDF document
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

  // Set the response headers for PDF download
  res.setHeader('Content-Disposition', `attachment; filename=invoice-${invoiceId}.pdf`);
  res.setHeader('Content-Type', 'application/pdf');

  // Pipe the PDF stream to response
  doc.pipe(res);

  // Header Section: Company Information
  doc
    .fontSize(18)
    .text('INVOICE', { align: 'center' })
    .moveDown();

  doc
    .fontSize(12)
    .text('Aptitude Guru Hem', { align: 'center' })
    .text('ADDRESS', { align: 'center' })
    .text('Aptitude Guru Hem, Chennai, Tamil Nadu', { align: 'center' })
    .text('PHONE: +91 9176120906', { align: 'center' })
    .text('EMAIL: https://www.aptitudeguru.in/', { align: 'center' });

  doc.moveDown(2);

  // Invoice Details
  doc
    .fontSize(12)
    .text(`INVOICE #: ${invoiceData.invoiceNumber}`, { align: 'right' })
    .text(`INVOICE DATE: ${invoiceData.invoiceDate}`, { align: 'right' })
    .moveDown(1);

  // Bill To Section
  doc
    .fontSize(12)
    .text('BILL TO:', { underline: true })
    .text(`USER NAME: ${invoiceData.recruiterName}`)
    .text(`ADDRESS: ${invoiceData.recruiterAddress}`)
    .text(`PHONE: ${invoiceData.recruiterPhone}`)
    .text(`EMAIL: ${invoiceData.recruiterEmail}`)
    .moveDown(2);

  // Purchase Details (Itemized List)
  doc
    .text('PURCHASE DATE: 2023-06-15')
    .text('GST NUMBER: GSTIN123456789')
    .moveDown(1);

  doc
    .fontSize(12)
    .text('QUANTITY     COURSE                ACTUAL PRICE       AMOUNT', { underline: true })
    .text(`1                   ${invoiceData.courseName}                 ${invoiceData.coursePrice}            ${invoiceData.total}`, { align: 'left' })
    .moveDown(1);

  // Subtotals and Totals
  doc
    .text(`SUBTOTAL: ${invoiceData.coursePrice}`, { align: 'right' })
    .text(`DISCOUNT: ${invoiceData.discount}`, { align: 'right' })
    .text(`GST (18%): ${invoiceData.gst}`, { align: 'right' })
    .moveDown(1);

  doc
    .fontSize(14)
    .text(`TOTAL: ${invoiceData.total}`, { align: 'right', bold: true })
    .moveDown(2);

  // Footer (Terms and Conditions)
  doc
    .fontSize(10)
    .text('TERMS & CONDITIONS:', { underline: true })
    .text('THANK YOU FOR YOUR BUSINESS!', { align: 'center' });

  // Finalize the PDF and send it
  doc.end();
};
